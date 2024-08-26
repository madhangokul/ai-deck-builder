import React, { useState, useContext } from 'react';
import AxiosContext from '../services/AxiosProvider'; // Adjust the path as needed
import {
  Container,
  Box,
  Paper,
  Button,
  Typography,
  TextField,
  Slider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Collapse
} from '@mui/material';

const defaultValues = {
  title: 'Mozambique',
  format: 'Feature Film',
  genre: 'Action, Crime, Drama',
  logline: 'Kari Vardhan - a Dreamer and middle class Father of two children...',
  target: 'Soozhal Cineemas',
  author: 'Mejel',
  slides: 7,
  synopsis: `Naalu perukku nalladhuna edhuvumey thappu illa. -Rajan - Father

Enaku nalladhuna edhuvumey thappu illa. - Kari - Son

Past: 2005

Rajan, in his late 30s, is drunkenly lamenting in his dilapidated small house while his teenage son, Kari, lies beside him. Rajan reveals that when his wife asked him to abandon violence after Kari's birth, he complied. However, she also implored him to renounce the ideology he held dear when Kari's mother was expecting a child, and he vehemently resisted.

Rajan continues to reiterate that his wife left him because he firmly believed in the notion of "Naalu perukku nalladhuna edhuvumey thappu illa" (a famous movie dialogue from Nayagan, meaning "If something is good for even four people, then it's not wrong to do it"). He insists that the blame lies with his wife, even for his descent into alcoholism. His 15-year-old son, Kari, lying beside him, already irritated by Rajan's loud drunken voice, becomes even more agitated upon hearing his father blame his mother and pleads with his dad to keep quiet.

As Rajan doesn’t keep quiet, at one point Kari loses it and shouts at Rajan that he is the reason for his mother to leave and it is not her fault. This triggers Rajan utmost. Rajan gets up to throw Kari out of the house and that’s the last day they both ever had a face-to-face conversation in life. When Rajan wakes up the next morning, Kari is missing and Rajan goes on to find him at his Uncle Kumar’s place and Kari refuses to even take a look at Rajan. A turbulent relationship goes on to follow until Kari finishes his 12th grade to leave his village and move to city with his mother. 


As they prepare to leave the area, Rajan makes a crucial observation: the marijuana is indeed being separated from the moringa consignment at this location. Simultaneously, Salvia makes a grim discovery, spotting Fernando's lifeless body stored in an icebox. The shock of these revelations leaves them both deeply shaken.

In their daring escape from the port, Rajan's long-unused military skills come to the fore as he skillfully handles a firearm to fend off Chacko's pursuing men. He's not alone in this endeavor, as his associates from India, who have backgrounds as Olympic shooters and had joined the South Indian Railways along with him, also contribute their shooting expertise to ensure their successful escape.

Salvia takes a bold step and releases the videos captured by Fernando, which reveal Chacko's involvement in various illicit activities. She also shares footage of Fernando's lifeless body discovered in the port space linked to Chacko. In addition to this, Salvia exposes Chacko's alleged involvement in smuggling marijuana from India to Mozambique. These revelations quickly gain widespread attention, going viral.

As this shocking news spreads, it coincides with the morning of Chacko's son's arrival for the grand housewarming party at their newly constructed palace, situated by the beach and surrounded by 200 acres of land filled with tall trees.

Rajan contacts Arora to inform him that Chacko is in the palace, and they have collected all the necessary evidence. He urges Arora to proceed with the arrest immediately. However, Arora advises Rajan to wait until they receive approval from the Mozambique government before taking action.

This response triggers the return of Rajan's "angry young man" persona, and he loses his patience. He disconnects the communication with Arora and throws the device aside, signaling that he intends to act independently and take charge from this point onwards. Despite Arora's attempts to shout and regain control of the situation, Rajan has made up his mind, and there's no turning back.

In a tense and strenuous confrontation, Rajan, Salvia, and the two sharpshooters make their way into the palace to capture Chacko. However, their mission takes a distressing turn when Chacko activates a remote control button connected to a large crane holding Kari hostage in a poclain. After a protracted struggle, marked by Rajan's resourcefulness, he manages to rescue Kari, but Chacko escapes using a submarine just as Mozambique officials, Arora, and his team arrive.

Despite successfully saving his son, Rajan finds himself under arrest alongside Chacko when Arora and his team apprehend them. They are later extradited to India on charges of smuggling marijuana from India. As Kari pleads with Arora that they are inncoent, Rajan is simply smiling, seemingly at peace with his decision and its consequences.

As they arrive at Mumbai airport, a swarm of news agencies and reporters are awaiting them. Arora steps forward to address the media, announcing that the NCB has successfully apprehended a major drug smuggler who has been on the run for the past three decades. However, as Rajan and Kari enter the scene, the media's attention shifts to them, and they are bombarded with questions about how, as civilians, they were able to pull off such incredible feats.

Kari appears bewildered by the unexpected attention, while Arora seems both irritated and confused. He attempts to reiterate that Rajan and Kari are also involved in smuggling. However, a journalist strongly insists that they witnessed Rajan fighting against Chacko and his men to capture them. Arora is left even more shocked and puzzled but persists in claiming that Rajan and Kari were attempting to escape with Chacko. He goes on to assert that the father and son duo runs a company called Mithila Exports, which has been exporting marijuana from Mozambique to India.

Rajan's auditor interjects and asserts that Mithila Exports had been officially dissolved nearly a month ago, and no operations have been ongoing since that time. He further emphasizes that the containers associated with their company name are likely fake and have been used to falsely implicate Kari and Rajan in drug smuggling activities, aimed at defaming their reputation.

Amidst the bustling crowd, Rajan's wife and Kari's wife stand there with their children as a united family. They embrace one another, reuniting in the midst of joy and celebration. The entire village awaits their arrival, and the atmosphere is filled with happiness and merriment.

In a heartfelt moment, Rajan expresses his gratitude to Kari, saying, "Thanks for helping me realize that sometimes it needs to be about oneself and one's own people." In response, Kari shares his own appreciation, stating, "And thanks for making me see that sometimes, it cannot be just about oneself and one's own people, but the larger picture is important." Their exchange symbolizes a profound understanding and reconciliation between the two generations.`,
  cfi: 5,
  tone: '',
  demography: '',
  era: '',
  setting: ''
};

const Playground = () => {
  const [inputData, setInputData] = useState(defaultValues);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(true);
  const [isSynopsisDialogOpen, setIsSynopsisDialogOpen] = useState(false);
  const [isFormHidden, setIsFormHidden] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [promptTemplate, setPromptTemplate] = useState(`
    You are tasked with creating a visually compelling pitch deck in 7 slides as provided above and for the above provided inputs for a story.
      
      You will follow the specific JSON schema and structure detailed below.
      
      The structure is critical for programmatic parsing and replacement, so you must adhere strictly to it.
      
      Each slide must represent a key aspect of the story and can include a combination of backgrounds, images, text, and shapes as per the following schema.
      

      in our case we try to build a 7nslide deck 
      1st slide for title 
      2nd slide is for the logline
      3rd slide for the progotganist
      4th slide for main chanracters and progotogonist 
      5th slide Act 1
      6th slide Act 2 
      7th silde Act 3


      As you have thec craetive freedom 
      you can cchoose to layo ut each slide to your choice and and when you provide the image desc 
      make sure you capture the essence of the story very well, when descripting the image please describe hte image as visually and do not narrate or explain teh characcters intention rather be deeatiled ion the outlook of the image. Please use intutative placement and sizes of the image.
      when provding the elements for the slide in the JSON be mindfull of hte order you make as well.
      JSON Schema: 
      {
        "JSONDATA": {
          "presentation": {
            "id": "presentation_id",
            "title": "story Title",
            "author": "story author",
            "timestamp": "Date",
            "slides": []
          }
        },
        "IMAGEDESC": []
      }

      Slide Elements:

      ###Background
      {
        "type": "background",
        "value": {
          "color": "#FFFFFF",
          "gradient": {
            "type": "linear",
            "stops": [
              { "color": "#FF0000", "position": "0%" },
              { "color": "#0000FF", "position": "100%" }
            ]
          }
        }
      }

      ###Image
      {
        "type": "image",
        "value": {
          "url": "IMAGE_LINK_HOLDER_1",
          "x": 100,
          "y": 200,
          "width": 400,
          "height": 300
        }
      }

      ###Text
      {
        "type": "text",
        "value": {
          "content": "Your Slide Text Here",
          "x": 50,
          "y": 100,
          "fontSize": 24,
          "fontColor": "#000000",
          "highlightColor": "#FFFF00",
          "textAlign": "center",
          "bold": true,
          "italic": false,
          "underline": false,
          "shadow": {
            "color": "#333333",
            "offsetX": 2,
            "offsetY": 2,
            "blurRadius": 4
          },
          "box": {
            "rounded": true,
            "padding": 10,
            "borderColor": "#000000",
            "borderWidth": 2
          }
        }
      }

      IMAGEDESC Schema: below is just an example
      {
        "IMAGEDESC": [{
                          "id": "slide_01_image_01",
                          "description": "description"
                        },
                        {
                          "id": "slide_02_image_03",
                          "description": "description "
                      }]
      }

      Important Notes:
      1. You must use the exact schema for both JSONDATA and IMAGEDESC. These will be programmatically parsed, so consistency is critical.
      2. Ensure that every image reference in JSONDATA has a corresponding description in IMAGEDESC, and vice versa. There should be no extra or missing references.
      3. Use the given schema for backgrounds, images, text, and other elements. Each element must adhere to the structure and attributes specified.
      4. The IMAGEDESC section must be detailed, providing specific and contextually relevant descriptions for each image.
      5. when json constructed keep in mind the points, [No comments within the JSON. Proper use of quotation marks: Keys and string values must be enclosed in double quotes. No trailing commas after the last item in objects or arrays.]
      `);

  const axiosInstance = useContext(AxiosContext);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (name) => (event, value) => {
    setInputData({ ...inputData, [name]: value });
  };

  const toggleSynopsisDialog = () => {
    setIsSynopsisDialogOpen(!isSynopsisDialogOpen);
  };

  const toggleFormVisibility = () => {
    setIsFormHidden(!isFormHidden);
  };


  const toggleAdvancedOptions = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  const handleClear = () => {
    setInputData(defaultValues);
  };

  const handleSubmit = async () => {
    try {
      // Collapse the advanced options on build
      setIsAdvancedOpen(false);
      setIsFormHidden(true);

      // Filter out empty fields and mandatory fields check
      const mandatoryFields = ['title', 'format', 'genre', 'logline', 'target', 'author'];
      for (const field of mandatoryFields) {
        if (!inputData[field]) {
          alert(`${field.charAt(0).toUpperCase() + field.slice(1)} is mandatory!`);
          return;
        }
      }

      // Initialize an empty string to hold the input values
    let inputsString = '';

    // Loop through inputData to append non-empty values
    Object.keys(inputData).forEach(key => {
      if (inputData[key] && inputData[key].toString().trim() !== '') {
        // Format key to start with a capital letter and add it to inputsString
        inputsString += `${key.charAt(0).toUpperCase() + key.slice(1)}: "${inputData[key]}"\n`;
      }
    });

    // Combine inputs string with prompt template
    let finalPrompt = inputsString + promptTemplate;

      console.log('request submitted' )
      console.log(finalPrompt)

      // API call with await and response handling
      const response = await axiosInstance.post('/slideGenerate', { prompt: finalPrompt });
      console.log('Slide generated:', response.data);
      // setResponseData(response.data);
    } catch (error) {
      console.error('Error generating slide:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>AI Deck Generator Playground</Typography>
      {!isFormHidden && (

        <Box mt={2}>

          {/* Basic Information */}
          <TextField
            fullWidth
            size="small"
            label="Title"
            name="title"
            value={inputData.title}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            size="small"
            label="Format"
            name="format"
            value={inputData.format}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            size="small"
            label="Genre"
            name="genre"
            value={inputData.genre}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            size="small"
            label="Logline"
            name="logline"
            value={inputData.logline}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            multiline
          />
          <TextField
            fullWidth
            size="small"
            label="Target"
            name="target"
            value={inputData.target}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            size="small"
            label="Author"
            name="author"
            value={inputData.author}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
          />

          {/* No of Slides */}
          <Typography gutterBottom>No of Slides (7-10)</Typography>
          <Slider
            value={inputData.slides || 7}
            min={7}
            max={10}
            step={1}
            onChange={handleSliderChange('slides')}
            valueLabelDisplay="auto"
          />

          {/* Synopsis with Expandable Dialog */}
          <Box display="flex" alignItems="center">
            <TextField
              fullWidth
              size="small"
              label="Synopsis"
              name="synopsis"
              value={inputData.synopsis}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
            />
            <Button variant="outlined" onClick={toggleSynopsisDialog} style={{ marginLeft: '10px' }}>
              Expand
            </Button>
          </Box>

          <Dialog open={isSynopsisDialogOpen} onClose={toggleSynopsisDialog} maxWidth="md" fullWidth>
            <DialogTitle>Synopsis</DialogTitle>
            <DialogContent>
              <TextField
                fullWidth
                label="Synopsis"
                name="synopsis"
                value={inputData.synopsis}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={15}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={toggleSynopsisDialog}>Close</Button>
            </DialogActions>
          </Dialog>

          {/* Advanced Options */}
          <Collapse in={isAdvancedOpen}>
            <Box mt={2}>
              <Typography gutterBottom>Creative Freedom Index (0-10)</Typography>
              <Slider
                value={inputData.cfi || 5}
                min={0}
                max={10}
                step={1}
                onChange={handleSliderChange('cfi')}
                valueLabelDisplay="auto"
              />
              <TextField
                fullWidth
                size="small"
                label="Tone"
                name="tone"
                value={inputData.tone}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                size="small"
                label="Demography"
                name="demography"
                value={inputData.demography}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                size="small"
                label="Era"
                name="era"
                value={inputData.era}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                size="small"
                label="Setting"
                name="setting"
                value={inputData.setting}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
              />
            </Box>
          </Collapse>

          {/* Build and Clear Buttons */}
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={toggleAdvancedOptions}>
              {isAdvancedOpen ? 'Collapse Advanced Options' : 'Show Advanced Options'}
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Build
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClear}>
              Clear
            </Button>
          </Box>

          {/* Editable Prompt Template */}
          <Box mt={2}>
            <Typography gutterBottom>Prompt Template</Typography>
            <TextField
              fullWidth
              size="small"
              label="Prompt Template"
              name="promptTemplate"
              value={promptTemplate}
              onChange={(e) => setPromptTemplate(e.target.value)}
              variant="outlined"
              multiline
              rows={8}
            />

          </Box>


        </Box>
      )}
      <Button variant="outlined" onClick={toggleFormVisibility}>
        {isFormHidden ? 'Expand Form' : 'Hide Form'}
      </Button>
      {responseData && (
        <Paper elevation={3} style={{ padding: '16px', marginTop: '20px' }}>
          <Typography variant="h6">Response Data:</Typography>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </Paper>
      )}

    </Container>
  );
};

export default Playground;
