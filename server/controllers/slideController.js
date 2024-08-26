const fs = require('fs');
const path = require('path');
const axios = require('axios');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const { parseJsonFromString } = require('../utils/jsonParser');
const openai = require('../config/openaiConfig');
const ideogramApi = require('../config/ideogramConfig'); // Ideogram API config
const uploadToS3 = require('../utils/uploadToS3'); // S3 upload utility

const generateSlideDeck = async (req, res) => {
  const { prompt, model = 'gpt-4' } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const cacheFilePath = path.join(__dirname, '../cache/data.json');

  try {
    let slideData;

    // Step 1: Check for cached data in data.json
    if (fs.existsSync(cacheFilePath)) {
      console.log('Cache found. Using cached data.');
      const cachedData = fs.readFileSync(cacheFilePath, 'utf-8');
      slideData = JSON.parse(cachedData);
    } else {
      // Step 2: Generate the JSON data from GPT if cache doesn't exist
      console.log('Sending prompt to GPT...');
      const gptResponse = await openai.chat.completions.create({
        model,
        messages: [{ role: 'user', content: prompt }],
      });

      console.log('Received response from GPT:', JSON.stringify(gptResponse, null, 2));

      // Step 3: Extract only the JSON content from GPT response
      let gptContent = gptResponse.choices[0].message.content;

      // Step 4: Use the custom JSON parser to parse the content
      try {
        slideData = parseJsonFromString(gptContent);
        console.log('Parsed slide data successfully using custom JSON parser.');
        console.log('Parsed Slide Data:', JSON.stringify(slideData, null, 2));

        // Step 5: Cache the parsed slide data in data.json for future requests
        fs.writeFileSync(cacheFilePath, JSON.stringify(slideData, null, 2), 'utf-8');
        console.log('Cached slide data successfully.');
      } catch (parseError) {
        console.error('Error parsing GPT response as JSON:', parseError.message);
        return res.status(500).json({ error: 'Failed to parse GPT response as JSON', details: parseError.message });
      }
    }

    // Continue with processing whether using cached data or freshly generated data
    const presentation = slideData.JSONDATA?.presentation;

    if (!presentation) {
      console.error('Presentation not found in parsed data:', JSON.stringify(slideData, null, 2));
      return res.status(500).json({ error: 'Invalid slide data: Missing presentation.' });
    }

    const slides = presentation.slides;
    let imageDesc = slideData.IMAGEDESC;

    if (!slides || !Array.isArray(slides)) {
      console.error('Slides not found in presentation:', JSON.stringify(presentation, null, 2));
      return res.status(500).json({ error: 'Invalid slide data: Missing slides.' });
    }

    if (!imageDesc) {
      console.error('Image descriptions not found:', JSON.stringify(slideData, null, 2));
      return res.status(500).json({ error: 'Invalid slide data: Missing image descriptions.' });
    }

    // Step 6: Process images and replace placeholders with S3 URLs
    console.log('Processing image descriptions...');
    // Check if imageDesc is an array and convert it to an object if true
    if (Array.isArray(imageDesc)) {
      const newImageDesc = {};
      imageDesc.forEach(desc => {
        newImageDesc[desc.id] = desc.description;
      });
      imageDesc = newImageDesc;
    }
    console.log(imageDesc);

    for (const [id, description] of Object.entries(imageDesc)) {
      try {
        // Generate the image using Ideogram API
        console.log(id, ":", description);
        const requestPayload = {
          image_request: {
            prompt: description,
            aspect_ratio: 'ASPECT_10_16', // Default aspect ratio, adjust if needed
            model: 'V_1_TURBO', // Default model, adjust if needed
            magic_prompt_option: 'ON',
            seed: 12345,
            negative_prompt: 'blur, pixelation, distortion'
          }
        };

        const response = await ideogramApi.post('/generate', requestPayload);
        const imageUrl = response.data.data[0].url;
        console.log("Ideogram URL: ", imageUrl)

        // Download and process the image
        const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const compressedImage = await sharp(imageResponse.data)
          .resize({ width: 780 })
          .jpeg({ quality: 50 })
          .toBuffer();

        // Upload the image to S3 and get the URL
        console.log("Upploading to s3" )

        const s3Url = await uploadToS3(compressedImage, process.env.S3_BUCKET_NAME, `${uuidv4()}.jpg`);
        console.log("s3 URL: ", s3Url )


        // Replace the placeholder in the slides with the S3 URL
        slides.forEach(slide => {
          slide.elements.forEach(element => {
            if (element.type === 'image' && element.value.url === id) {
              element.value.url = s3Url;
            }
          });
        });

        console.log(`Replaced ${id} with ${s3Url}`);
      } catch (imageError) {
        console.error(`Error processing image ${id}:`, imageError.message);
      }
    }


    // Step 7: Additional processing of slides and returning the response
    console.log('Slide deck generation complete. Returning final JSON.');
    res.json(slideData.JSONDATA);
  } catch (error) {
    console.error('Error generating slide deck:', error.message);
    res.status(500).json({ error: 'Failed to generate slide deck', details: error.message });
  }
};

module.exports = { generateSlideDeck };
