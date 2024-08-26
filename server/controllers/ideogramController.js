const ideogramApi = require('../config/ideogramConfig');
const axios = require('axios');
const sharp = require('sharp');
const { v4: uuidv4 } = require('uuid');
const uploadToS3 = require('../utils/uploadToS3');

const generateImage = async (req, res) => {
  const { prompt, aspect_ratio, model, magic_prompt_option, seed, negative_prompt, s3_folder } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const requestPayload = {
    image_request: {
      prompt,
      aspect_ratio: aspect_ratio || 'ASPECT_10_16',
      model: model || 'V_1_TURBO',
      magic_prompt_option: magic_prompt_option || 'ON',
      seed: seed || 12345,
      negative_prompt: negative_prompt || 'blur, pixelation, distortion'
    }
  };

  try {
    // Generate the image using Ideogram API
    const response = await ideogramApi.post('/generate', requestPayload);
    const imageUrl = response.data.data[0].url;

    // Download and process the image
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const compressedImage = await sharp(imageResponse.data)
      .resize({ width: 780 })
      .jpeg({ quality: 50 })
      .toBuffer();

    // Define S3 folder and file name
    const folderPath = s3_folder || process.env.DEFAULT_S3_FOLDER;
    const s3FileName = `${uuidv4()}.jpg`;

    // Upload to S3
    const fileUrl = await uploadToS3(compressedImage, folderPath, s3FileName);

    // Return S3 URL as response
    res.json({ fileUrl });
  } catch (err) {
    console.error('Error generating or uploading image:', err);
    res.status(500).json({ error: 'Error generating or uploading image' });
  }
};

module.exports = { generateImage };
