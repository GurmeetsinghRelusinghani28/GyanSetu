const { getStoryFromGemini } = require('../services/geminiService');

const generateStory = async (req, res) => {
  const { prompt, language, religion } = req.body;

  if (!prompt || !language) {
    return res.status(400).json({ success: false, error: 'Prompt and language are required.' });
  }

  try {
    const story = await getStoryFromGemini(prompt, language, religion);
    res.json({ success: true, story });
  } catch (error) {
    console.error('Gemini API error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to generate story.' });
  }
};

module.exports = { generateStory };
