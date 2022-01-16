import React from 'react';
import APODView from './APODView';
import ItemDetails from './ItemDetails';
import Banner from './Banner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Banner />
      <Switch>
        <Route exact path='/' component={APODView} />
        <Route exact path='/photos/:date' component={ItemDetails} />
      </Switch>
    </Router>
  );
}

export default App;
