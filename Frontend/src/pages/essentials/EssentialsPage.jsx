import React from 'react';
import EssentialsCard from '../../components/EssentialsCard';
import essentials from '../../assets/essentials';
import './EssentialsPage.css';
import Navbar from '../../components/comman/Navbar';
const EssentialsPage = () => {

  return (
    <>
    <Navbar />
    <div className="essentials-page">
      <h2 className="essentials-heading">Shop Daily Essentials</h2>
      <div className="essentials-grid">
        {essentials.map((item) => (
          <EssentialsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
    </>
  );
};
export default EssentialsPage;