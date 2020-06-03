import React from 'react';
import HeaderFooter from './components/headerFooter/HeaderFooter';
import { Switch, Route } from 'react-router';
import Home from './pages/home/distil';
import Series from './pages/series/distil';
import Movies from './pages/movies/distil';
import ErrorPage from './pages/404/distil';

function App() {
  return (
    <div className='App'>
      <HeaderFooter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/series' component={Series} />
          <Route exact path='/movies' component={Movies} />
          <Route path='*' component={ErrorPage} />
        </Switch>
      </HeaderFooter>
    </div>
  );
}

export default App;
