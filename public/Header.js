import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  // State to store the search query
  const [roomType, setroomType] = useState('');
  const navigate= useNavigate();
  // Function to handle input change in the search field
  const handleSearchInputChange = (event) => {
    setroomType(event.target.value);
  };

  // Function to handle search action
  const handleSearch = () => {
    // Perform search action using the roomType state
    console.log('Search Query:', roomType);
    navigate(`/search/${roomType}`)
    // Here you can implement the logic to perform the actual search
    // For example, you can make an API call to search for items based on the roomType
  };

  return (
    <>
      <div className="header">
        <div className="header-main">
          <div className="header-logo">
            <div className="logo"></div>
          </div>
          <div className="header-content">
            <div className="header-list">
              <span>Home</span>
              <span>About</span>
              <span>Services</span>
              <span>Contact Us</span>
            </div>
            <div className="header-search">
              <input
                className="search"
                type="text"
                placeholder="Search"
                value={roomType}
                onChange={handleSearchInputChange}
              />
              <button className='search-button' onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
              </button>
            </div>

            <div className="header-login">
              <span className='login'>Login</span>
            </div>

            <div className="header-cart">
              <i className="fa fa-shopping-cart"></i>
              <span className='login'>Cart</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
