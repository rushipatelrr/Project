const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  deliveryLocation: String,
  cartSource: String,
  cartItems: [
    {
      name: String,
      price: Number,
      quantity: Number,

      // 🔽 Add these fields for recommendation logic
      tasteProfile: [String],      // e.g., ['Spicy', 'Savory']
      cuisine: String,             // e.g., 'Italian'
      spiceLevel: String,          // e.g., 'Medium'
      isVeg: Boolean,
      category: String,            // e.g., 'Main Course'
    },
  ],
  restaurantName: String,
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
