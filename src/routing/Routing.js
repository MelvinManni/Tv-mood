import React from 'react';
import { Switch, Route } from 'react-router';
import HeaderFooter from '../components/headerFooter/HeaderFooter';
import Home from '../pages/home/distil';
import Series from '../pages/series/distil';
import Movies from '../pages/movies/distil';
import ErrorPage from '../pages/404/distil';
import { BrowserRouter } from 'react-router-dom';

function Routing() {
  return (
    <div className='Routing'>
      <BrowserRouter>
        <HeaderFooter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/series' component={Series} />
            <Route exact path='/movies' component={Movies} />
            <Route component={ErrorPage} />
          </Switch>
        </HeaderFooter>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
