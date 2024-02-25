// cartController.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const { addToCart, getCartByUserId } = require('../models/cartModel');

router.post('/add-to-cart', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;
    await addToCart(userId, productId, quantity);
    res.json({ message: 'Product added to cart successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/cart', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await getCartByUserId(userId);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
