const express = require('express');
const router = express.Router();
const { generateStory } = require('../controllers/storyController');

router.post('/generate-story', generateStory);

module.exports = router;
