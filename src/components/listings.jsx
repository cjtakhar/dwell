import React, { useState, useEffect } from 'react';
import './styles/listings.css';

const Listings = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const savedLinks = localStorage.getItem('links');
    if (savedLinks) {
      setLinks(JSON.parse(savedLinks));
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

  const handleRemoveLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
    localStorage.setItem('links', JSON.stringify(updatedLinks));
  };

  const renderLinks = () => {
    return links.map((link, index) => {
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
          <button className="remove-button" onClick={() => handleRemoveLink(index)}>x</button>
        </div>
      );
    });
  };

  const handleAddLink = () => {
    const newLink = prompt('Enter a link:');
    if (newLink) {
      const updatedLinks = [...links, newLink];
      setLinks(updatedLinks);
      localStorage.setItem('links', JSON.stringify(updatedLinks));
    }
  };

  return (
    <div className="listings-container">
      <h2 className="listings-title">Listings</h2>
      <button className="listings-button" onClick={handleAddLink}>Add Link</button>

      <div className="link-list" onDrop={handleDrop} onDragOver={handleDragOver}>
        {renderLinks()}
      </div>
    </div>
  );
};

export default Listings;
