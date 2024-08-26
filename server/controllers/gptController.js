const openai = require('../config/openaiConfig');

const sendGPTCompletion = async (req, res) => {
  const { prompt, model = 'gpt-4' } = req.body; // Default to 'gpt-4' if no model is provided

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await openai.chat.completions.create({
      model,
      messages: [{ role: 'user', content: prompt }],
    });

    res.json(response); // Send the response directly
  } catch (error) {
    console.error('Error with GPT completion:', error);
    res.status(500).json({ error: 'Failed to generate GPT response' });
  }
};

module.exports = { sendGPTCompletion };
