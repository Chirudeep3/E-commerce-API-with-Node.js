// categoryController.js
const express = require('express');
const router = express.Router();
const { getCategories } = require('../models/categoryModel');

router.get('/categories', async (req, res) => {
  try {
    const categories = await getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
