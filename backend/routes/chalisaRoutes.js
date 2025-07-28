const express = require("express");
const { getChalisa, analyzeVerse,analyzeChant,chatWithGod } = require("../controllers/chalisaController");

const router = express.Router();

router.get("/chalisa", getChalisa);
router.post("/analyze", analyzeVerse,(req, res) => {
    res.send("API is working");
});

router.post("/analyzeChant", analyzeChant);
router.post("/chat", chatWithGod);

module.exports = router;
