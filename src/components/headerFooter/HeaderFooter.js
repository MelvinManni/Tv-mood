import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const style = {
  padding: '60px 40px',
};

function HeaderFooter(props) {
  return (
    <React.Fragment>
      <Header />
      <div style={style}>{props.children}</div>
      <Footer />
    </React.Fragment>
  );
}

export default HeaderFooter;
