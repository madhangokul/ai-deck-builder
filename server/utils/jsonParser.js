const parseJsonFromString = (inputString) => {
    try {
      // Clean the input string:
      // 1. Remove Markdown formatting (like ```json and ```)
      let content = inputString.replace(/```json/g, '').replace(/```/g, '');
      
      // 2. Unescape JSON special characters like \n and \"
      content = content.replace(/\\n/g, '').replace(/\\"/g, '"');
      
      // Regular expression to find the first JSON object
      const jsonMatch = content.match(/{.*}/s);
      
      if (jsonMatch) {
        const jsonStr = jsonMatch[0];
        const parsedJson = JSON.parse(jsonStr);
        return parsedJson;
      } else {
        throw new Error("No valid JSON found in the input string.");
      }
    } catch (error) {
      console.error(`Error parsing input string: ${error.message}`);
      throw error;  // Rethrow the error to handle it in the calling function
    }
  };
  
  module.exports = { parseJsonFromString };
  