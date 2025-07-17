import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/comman/Navbar';
import './HomePage.css';
import stationary from '../../assets/images/stationary.gif';
import food from '../../assets/images/food.gif';

const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token || !userData) navigate('/login');
    else setUser(JSON.parse(userData));
  }, [navigate]);

  return (
    <>
      <Navbar />

      <div className="home-container">
        {user && <h2 className="welcome-msg">Hello, {user.name} 👋</h2>}
        <p className="subheading">What would you like to explore today?</p>

        <div className="category-grid">
          <div className="category-card food" onClick={() => navigate('/food')}>
            <img src={food} alt="Food Icon" width="80" height="80" />
            <h3>Food & Beverages</h3>
          </div>

          <div className="category-card essentials" onClick={() => navigate('/essentials')}>
            <img src={stationary} alt="Stationary Icon" width="80" height="80" />
            <h3>Essentials & Stationery</h3>
          </div>
        </div>

        <div className="quick-actions">
          <button onClick={() => navigate('/orders')}>🧾 My Orders</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
