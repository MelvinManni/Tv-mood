import React from 'react';
import './card.css';

function Card(props) {
  return (
    <div className='movieCard'>
      <div className='card' style={{ backgroundImage: `url('${props.src}')` }}>
        <div className='cardTitle'>
          <div className='cardTitleAnimation'>
            <h2>{props.title}</h2>
          </div>
        </div>
        <div className='details'>
          <div className='absolute-position'>
            <div className='cardTop'>
              <p>Released:{props.year}</p>
              <p className='programType'>{props.programType}</p>
            </div>
            <div className='cardBody'>
              <p>{props.body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
