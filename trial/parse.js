const fs = require('fs');

const parseJsonFromFile = (filePath) => {
  try {
    // Read the file
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Clean the content:
    // 1. Remove Markdown formatting (like ```json and ```)
    content = content.replace(/```json/g, '').replace(/```/g, '');
    
    // 2. Unescape JSON special characters like \n and \"
    content = content.replace(/\\n/g, '').replace(/\\"/g, '"');
    
    // Regular expression to find the first JSON object
    const jsonMatch = content.match(/{.*}/s);
    
    if (jsonMatch) {
      const jsonStr = jsonMatch[0];
      const parsedJson = JSON.parse(jsonStr);
      console.log("Parsed JSON:", JSON.stringify(parsedJson, null, 2));
    } else {
      console.error("No valid JSON found in the file.");
    }
  } catch (error) {
    console.error(`Error reading or parsing the file: ${error.message}`);
  }
};

// Check if the script is run with the correct argument
if (process.argv.length !== 3) {
  console.error("Usage: node parse.js <path-to-file>");
  process.exit(1);
}

// Get the file path from the command line argument
const filePath = process.argv[2];

// Ensure the file exists
if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

// Parse the JSON from the file
parseJsonFromFile(filePath);
