import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import './Styles/Global-Classes.scss';

//Pages
import Landing from './Pages/1.Landing/Landing';
import FullNav from './Constant-Components/Navigation/FullNav/FullNav';
import MobileNav from './Constant-Components/Navigation/MobileNav/MobileNav';

function App() {
  return (
    <div className="App">

      <FullNav />
      <MobileNav />

      <div className='AppWrapper'>

      <Switch>

        <Route path='/' exact component={Landing} />

      </Switch>

      </div>


    </div>
  );
}

export default App;
