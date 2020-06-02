import React from 'react';
import './homeCard.css';
import reel from './assets/film-reel.svg';

export default function HomeCard(props) {
  return (
    <div>
      <div className='location card'>
        <div className='cardOverlay'>
          <div>
            <a className='cardLink' href={props.link}>
              <img src={reel} width='60px' alt='fil reel' />
              <span className='location'>
                {props.title}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
