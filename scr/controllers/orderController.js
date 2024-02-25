// orderController.js
const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authMiddleware');
const { placeOrder, getOrderHistory, getOrderById } = require('../models/orderModel');

router.post('/place-order', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const products = req.body.products;
    await placeOrder(userId, products);
    res.json({ message: 'Order placed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/order-history', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const orderHistory = await getOrderHistory(userId);
    res.json(orderHistory);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/order/:orderId', authenticateToken, async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await getOrderById(orderId);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
