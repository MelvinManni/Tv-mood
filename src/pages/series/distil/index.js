import React from 'react';
import store, { fetch } from '../../../redux/store/store';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Card from '../../../components/card/Card';
import Loader from '../../../components/loader/Loader';
import Error from '../../../components/error/Error';

store.dispatch(fetch());

function Series() {
  const data = {
    loading: useSelector((state) => state.loading),
    entries: useSelector((state) => state.data.entries),
    error: useSelector((state) => state.error),
  };
  let i = 0;
  store.subscribe(() => {});

  const Series = [];

  Object.keys(data.entries).forEach((item, index) => {
    if (
      data.entries[item].programType === 'series' &&
      data.entries[item].releaseYear >= 2010 &&
      i < 21
    ) {
      i += 1;
      Series.push(data.entries[item]);
    } else {
      return null;
    }
  });

  function compare_item(a, b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  }

  const sortedSeries = Series.sort(compare_item);

  return (
    <div className='cardHolder'>
      {data.loading ? (
        <Loader />
      ) : data.error !== '' ? (
        <Error />
      ) : (
        Object.keys(sortedSeries).map((item) => (
          <Card
            key={uuidv4()}
            title={sortedSeries[item].title}
            src={sortedSeries[item].images['Poster Art'].url}
            alt={sortedSeries[item].title}
            body={sortedSeries[item].description}
            year={sortedSeries[item].releaseYear}
            programType={sortedSeries[item].programType}
          />
        ))
      )}
    </div>
  );
}

export default Series;
