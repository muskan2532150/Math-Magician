import React from 'react';
//  import animeH from './Anime';

const Header = () => {
  const textWrapper = document.querySelector('.ml2');
  console.log(textWrapper);
  // animeH();
  return (
    <>
      <nav>
        <div className="heading">
          <h1 className="ml2">MATH MAGICIANS</h1>
        </div>
        <ul>
          <li>Home</li>
          <li>Calulator</li>
          <li>Quotes</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
