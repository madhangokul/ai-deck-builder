import React, { useState } from 'react';
import { 
  Container, 
  Box, 
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

const Playground = () => {
  const [inputData, setInputData] = useState({
    title: '',
    format: '',
    genre: '',
    logline: '',
    target: '',
    author: '',
    slides: 7,
    synopsis: '',
    cfi: 5,
    tone: '',
    demography: '',
    era: '',
    setting: ''
  });
  
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(true);
  const [isSynopsisDialogOpen, setIsSynopsisDialogOpen] = useState(false);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (name) => (event, value) => {
    setInputData({ ...inputData, [name]: value });
  };

  const toggleSynopsisDialog = () => {
    setIsSynopsisDialogOpen(!isSynopsisDialogOpen);
  };

  const toggleAdvancedOptions = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  const handleSubmit = () => {
    // Collapse the advanced options on build
    setIsAdvancedOpen(false);

    // Filter out empty fields and mandatory fields check
    const mandatoryFields = ['title', 'format', 'genre', 'logline', 'target', 'author'];
    let prompt = '';

    mandatoryFields.forEach(field => {
      if (!inputData[field]) {
        alert(`${field.charAt(0).toUpperCase() + field.slice(1)} is mandatory!`);
        return;
      }
    });

    // Build the dynamic prompt with non-empty fields
    for (const key in inputData) {
      if (inputData[key]) {
        prompt += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${inputData[key]}\n`;
      }
    }

    prompt += `
    You are tasked with creating a visually compelling pitch deck in ${inputData.slides} slides as provided above and for the above provided inputs for a story.
    
    You will follow the specific JSON schema and structure detailed below.
    
    The structure is critical for programmatic parsing and replacement, so you must adhere strictly to it.
    
    Each slide must represent a key aspect of the story and can include a combination of backgrounds, images, text, and shapes as per the following schema.
    
    JSON Schema: 
    {
      "JSONDATA": {
        "presentation": {
          "id": "presentation_id",
          "title": "${inputData.title}",
          "author": "${inputData.author}",
          "timestamp": "Date",
          "slides": []
        }
      },
      "IMAGEDESC": []
    }

    Important Notes:
    Ensure that every image reference in JSONDATA has a corresponding description in IMAGEDESC, and vice versa. There should be no extra or missing references.
    `;

    console.log(prompt);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>AI Deck Generator Playground</Typography>
      
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

        {/* Build Button */}
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button variant="outlined" onClick={toggleAdvancedOptions}>
            {isAdvancedOpen ? 'Collapse Advanced Options' : 'Show Advanced Options'}
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Build
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Playground;
