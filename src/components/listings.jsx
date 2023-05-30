import React, { useState, useEffect } from 'react';
import './styles/listings.css';

const Listings = () => {
  const [links, setLinks] = useState([]);
  const [buyLinks, setBuyLinks] = useState([]);
  const [rentLinks, setRentLinks] = useState([]);

  useEffect(() => {
    const savedLinks = localStorage.getItem('links');
    if (savedLinks) {
      setLinks(JSON.parse(savedLinks));
    }

    const savedBuyLinks = localStorage.getItem('buyLinks');
    if (savedBuyLinks) {
      setBuyLinks(JSON.parse(savedBuyLinks));
    }

    const savedRentLinks = localStorage.getItem('rentLinks');
    if (savedRentLinks) {
      setRentLinks(JSON.parse(savedRentLinks));
    }
  }, []);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index.toString());
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const sourceIndex = e.dataTransfer.getData('index');
    const targetIndex = e.target.getAttribute('data-index');
    const updatedLinks = [...links];
    const [draggedLink] = updatedLinks.splice(sourceIndex, 1);
    updatedLinks.splice(targetIndex, 0, draggedLink);
    setLinks(updatedLinks);
    localStorage.setItem('links', JSON.stringify(updatedLinks));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveLink = (index, type) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
    localStorage.setItem('links', JSON.stringify(updatedLinks));

    if (type === 'buy') {
      const updatedBuyLinks = [...buyLinks];
      updatedBuyLinks.splice(index, 1);
      setBuyLinks(updatedBuyLinks);
      localStorage.setItem('buyLinks', JSON.stringify(updatedBuyLinks));
    } else if (type === 'rent') {
      const updatedRentLinks = [...rentLinks];
      updatedRentLinks.splice(index, 1);
      setRentLinks(updatedRentLinks);
      localStorage.setItem('rentLinks', JSON.stringify(updatedRentLinks));
    }
  };

  const handleAddLink = (type) => {
    const newLink = prompt('Enter a link:');
    if (newLink) {
      const updatedLinks = [...links, newLink];
      setLinks(updatedLinks);
      localStorage.setItem('links', JSON.stringify(updatedLinks));

      if (type === 'buy') {
        const updatedBuyLinks = [...buyLinks, newLink];
        setBuyLinks(updatedBuyLinks);
        localStorage.setItem('buyLinks', JSON.stringify(updatedBuyLinks));
      } else if (type === 'rent') {
        const updatedRentLinks = [...rentLinks, newLink];
        setRentLinks(updatedRentLinks);
        localStorage.setItem('rentLinks', JSON.stringify(updatedRentLinks));
      }
    }
  };

  const renderLinks = (linkArray, type) => {
    return linkArray.map((link, index) => {
      const addressMatch = link.match(/homedetails\/([^/]+)\//);
      const address = addressMatch ? addressMatch[1] : '';
      return (
        <div
          key={index}
          className="link-item"
          draggable="true"
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          data-index={index}
        >
          <a href={link} target="_blank" rel="noopener noreferrer" className="address-link">{address}</a>
          <button className="remove-button" onClick={() => handleRemoveLink(index, type)}>x</button>
        </div>
      );
    });
  };

  return (
    <div className="listings-container">
      <div>
        <h2 className="listings-title">Listings</h2>
      </div>
      <div className="buy-rent-container">
        <div className="buy-container">
          <h2>Buy <span onClick={() => handleAddLink('buy')}>+</span></h2>
          <div className="link-list" onDrop={handleDrop} onDragOver={handleDragOver}>
            {renderLinks(buyLinks, 'buy')}
          </div>
        </div>
        <div className="rent-container">
          <h2>Rent <span onClick={() => handleAddLink('rent')}>+</span></h2>
          <div className="link-list" onDrop={handleDrop} onDragOver={handleDragOver}>
            {renderLinks(rentLinks, 'rent')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
