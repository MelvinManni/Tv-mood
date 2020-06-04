import React from 'react';
import err from './../assets/error.jpg';

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
