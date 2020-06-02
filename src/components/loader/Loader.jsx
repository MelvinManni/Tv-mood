import React from 'react';
import loadIcon from './assets/Spinner.gif';

const style = {
  margin: 10,
};

function Loader() {
  return (
    <div className='flex-center' style={style}>
      <img src={loadIcon} alt='loadin icon' />
    </div>
  );
}

export default Loader;
