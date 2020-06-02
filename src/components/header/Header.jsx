import React from 'react';
import './header.css';
import tvIcon from './assets/television.svg';

function Header() {
  return (
    <div>
      <div className='header'>
        <nav>
          <div className='navLogo'>
            <img src={tvIcon} alt='Old tv icon' />
            <p>
              <span>T</span>
              <span>V</span>mood
            </p>
          </div>

          <div className='navList'>
            <div className='navListItem'>
              <a href='/' className='linkItem'>
                Home
              </a>
              <a href='/series' className='linkItem'>
                Series
              </a>
              <a href='/movies' className='linkItem'>
                Movies
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className='subHead'>
        <p className='text'></p>
      </div>
    </div>
  );
}

export default Header;
