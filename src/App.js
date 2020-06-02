import React from 'react';
import Home from './pages/home/distil';
import Movies from './pages/movies/distil/index';
import Series from './pages/series/distil/index';
import HeaderFooter from './components/headerFooter/HeaderFooter';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <div className='App'>
      <HeaderFooter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/series' component={Series} />
          <Route exact path='/movies' component={Movies} />
        </Switch>
      </HeaderFooter>
    </div>
  );
}

export default App;
