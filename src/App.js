import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import './Styles/Global-Classes.scss';

//Navigation
import FullNav from './Constant-Components/Navigation/FullNav/FullNav';
import MobileNav from './Constant-Components/Navigation/MobileNav/MobileNav';

//Pages
import Landing from './Pages/1.Landing/Landing';
import ProductPageBikes from './Pages/2.ProductPage-Bikes/ProductPageBikes';
import ProductPageTrail from './Pages/4.ProductPage-Trail/ProductPageTrail';
import ProductPageDownHill from './Pages/3.ProductPage-DownHill/ProductPageDownHill';
import ProductPageSWorks from './Pages/5.ProductPage-S-Works/ProductPageSWorks';
import Cart from './Pages/Cart/Cart';
import SignIn from './Pages/SignIn/SignIn';
import Retailer from './Pages/Retailer/Retailer';
import InsideSpecialized from './Pages/Inside-Specialized/InsideSpecialized';
import FullFooter from './Constant-Components/Footer/FullFooter/FullFooter';
import MobileFooter from './Constant-Components/Footer/MobileFooter/MobileFooter';
import NavDrawer from './Constant-Components/SideDrawers/NavDrawer/NavDrawer';



export default class App extends Component {
  constructor(){
    super();

    this.state = {
      DrawerOpen: false,
      SearchOpen: false,
      QuickCartOpen: false,
      UserSignedIn: false,
    }
  }

      ToggleDrawer = () => {
          this.setState((prevState) => {
            return {DrawerOpen: !prevState.DrawerOpen}
          });
        }

        CloseDrawer = () => {
          this.setState({ DrawerOpen: false });
        }



  render() {
    return (
     <div className="App">
        <div className='AppInner'>

          <FullNav />
            <MobileNav ToggleDrawer={this.ToggleDrawer}
                        />
              <NavDrawer CloseDrawer={this.CloseDrawer}
                          DrawerStatus={this.state.DrawerOpen}/>

                <div className='AppContentWrap'>

                  <Switch>

                    <Route path='/' exact component={Landing} />
                    <Route path='/products/bikes' component={ProductPageBikes} />
                    <Route path='/products/trail' component={ProductPageTrail} />
                    <Route path='/products/downhill' component={ProductPageDownHill} />
                    <Route path='/products/s-works' component={ProductPageSWorks} />
                    <Route path='/user-sign-in' component={SignIn} />
                    <Route path='/user-cart' component={Cart} />
                    <Route path='/retailers' component={Retailer} />
                    <Route path='/inside-specialized' component={InsideSpecialized} />

                  </Switch>

                </div>

            <FullFooter />
          <MobileFooter />

        </div>
    </div>
    )
  }
}

