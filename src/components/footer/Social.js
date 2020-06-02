import React from 'react';
import youtube from './assets/youtube.svg';
import fb from './assets/facebook.svg';
import twt from './assets/twitter.svg';
import telegram from './assets/telegram.svg';
import ig from './assets/instagram.svg';
import mail from './assets/gmail.svg';
import './footer.css'

function Social() {
  return (
    <div className='socials'>
      <div className='socialMedia'>
        <p className='title'>Connect With Us</p>

        <div className='socialFlex'>
          <div>
            <div className='facebook'>
              <img src={fb} alt='facebook icon' />
            </div>

            <div className='twitter'>
              <img src={twt} alt='twitter icon' />
            </div>

            <div className='telegram'>
              <img src={telegram} alt='telegram icon' />
            </div>
          </div>
          <div className='mt'>
            <div className='youtube'>
              <img src={youtube} alt='youtube icon' />
            </div>
            <div className='instagram'>
              <img src={ig} alt='instagram icon' />
            </div>

            <div className='gmail'>
              <img src={mail} alt='gmail icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
