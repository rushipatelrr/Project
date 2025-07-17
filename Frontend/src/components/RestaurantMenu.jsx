import React, { useState } from 'react';
import './RestaurantMenu.css';
import { useCart } from '../context/CartContext';


const RestaurantMenu = ({ restaurantName, items }) => {
  const [quantities, setQuantities] = useState({});
  const { addToCart, updateQuantity } = useCart();

  const handleAddToCart = (item, index) => {
    setQuantities((prev) => ({ ...prev, [item.id]: 1 }));
    addToCart(item);
  };

  const handleIncrement = (item) => {
    const newQty = (quantities[item.id] || 0) + 1;
    setQuantities((prev) => ({ ...prev, [item.id]: newQty }));
    updateQuantity(item.id, newQty);
  };

  const handleDecrement = (item) => {
    const newQty = (quantities[item.id] || 0) - 1;
    if (newQty <= 0) {
      const copy = { ...quantities };
      delete copy[item.id];
      setQuantities(copy);
      updateQuantity(item.id, 0); // this will remove item
    } else {
      setQuantities((prev) => ({ ...prev, [item.id]: newQty }));
      updateQuantity(item.id, newQty);
    }
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">{restaurantName} - Menu</h2>
      {items && items.length > 0 ? (
        <div className="menu-list">
          {items.map((item) => (
            <div className="menu-card" key={item.id}>
              <div className="menu-card-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="menu-price">₹{item.price}</span>
              </div>

              {quantities[item.id] ? (
                <div className="quantity-controller">
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span>{quantities[item.id]}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </div>
              ) : (
                <button
                  className="add-cart-btn"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No menu items available.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
