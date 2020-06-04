import React from 'react';
import err from './../assets/2bf9f053182371.592b9aebf2af0.jpg';

const style = {
  display: 'flex',
  justifyContent: 'center',
};

const imgStyle = {
  maxWidth: 400,
  minWidth: 280
};


function ErrorPage() {
  return (
    <div style={style}>
      <img src={err} style={imgStyle} alt=' Error 404' />
    </div>
  );
}

export default ErrorPage;
