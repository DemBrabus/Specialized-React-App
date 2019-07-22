import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

//Pages
import Landing from './Pages/1.Landing/Landing';

function App() {
  return (
    <div className="App">

      <Switch>

        <Route path='/' exact component={Landing} />

      </Switch>

    </div>
  );
}

export default App;
