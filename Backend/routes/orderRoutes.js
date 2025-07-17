const express = require('express');
const router = express.Router();
const { placeOrder, getUserOrders } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// ✅ These functions MUST be defined and exported in ../controllers/orderController.js

router.post('/checkout', authMiddleware, placeOrder);
router.get('/my-orders', authMiddleware, getUserOrders);

module.exports = router;
