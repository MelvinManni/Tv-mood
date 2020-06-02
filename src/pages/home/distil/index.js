import React from 'react';
import HomeCard from './../../../components/homeCard/HomeCard';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
};

function Home() {
  return (
    <div style={style}>
      <HomeCard link={'/series'} title={'Series'} />

      <HomeCard link={'/movies'} title={'Movies'} />
    </div>
  );
}

export default Home;
