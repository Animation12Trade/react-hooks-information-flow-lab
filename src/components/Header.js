import React from 'react'

const Header = ({ onDarkModeClick }) => {
    const handleDarkModeClick = () => {
        onDarkModeClick();
      };

  return (
    <header>
        <button onClick={handleDarkModeClick}>Toggle Dark Mode</button>
    </header>
  )
}

export default Header;