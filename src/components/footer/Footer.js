import React from 'react';
import './footer.css';
import tvIcon from './assets/television.svg';
import Social from './Social';

function Footer() {
  return (
    <footer>
      <div className='footFlex'>
        <div className='footLogo'>
          <a href='/'>
            <img src={tvIcon} alt='Old tv icon' />
            <p>
              <span>T</span>
              <span>V</span>mood
            </p>
          </a>
        </div>

        <div className='quicklinks'>
          <p className='title'>Quicklinks</p>
          <div>
            <a href='/series'>Series</a>

            <a href='/movies'>Movies</a>
          </div>
        </div>

        <div>
          <Social />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
