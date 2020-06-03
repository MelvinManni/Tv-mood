import React from 'react';
import HeaderFooter from './components/headerFooter/HeaderFooter';
import { Switch, Route } from 'react-router';
import Home from './pages/home/distil';
import Series from './pages/series/distil';
import Movies from './pages/movies/distil';

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
