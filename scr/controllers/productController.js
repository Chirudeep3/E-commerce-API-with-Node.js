// productController.js
const express = require('express');
const router = express.Router();
const { getProductsByCategory, getProductById } = require('../models/productModel');

router.get('/products/:categoryId', async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const products = await getProductsByCategory(categoryId);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/product/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await getProductById(productId);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
