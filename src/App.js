import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import './Styles/Global-Classes.scss';
import ScrollToTop from './Constant-Components/ScrollToTop/ScrollToTop';

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
import AccountCreation from './Pages/AccountCreation/AccountCreation';
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


    //Nav Drawer
        ToggleDrawer = () => {
          this.setState((prevState) => {
            return {DrawerOpen: !prevState.DrawerOpen}
          });
        }
            CloseDrawer = () => {
              this.setState({ DrawerOpen: false });
            }

    //Search DropDown
        ToggleSearch = () => {
          this.setState((prevState) => {
              return {SearchOpen: !prevState.SearchOpen}
            });
        }
            CloseSearch = () => {
                this.setState({ SearchOpen: false });
              }


  render() {

    console.log(this.state.SearchOpen);
    return (

      <ScrollToTop>

        <div className="App" >
          <div className='AppInner'>

            <FullNav ToggleSearch={this.ToggleSearch} 
                      CloseSearch={this.CloseSearch}
                      SearchStatus={this.state.SearchOpen}/>
              <MobileNav ToggleDrawer={this.ToggleDrawer}
                          ToggleSearch={this.ToggleSearch} 
                            CloseSearch={this.CloseSearch}
                            SearchStatus={this.state.SearchOpen}
                          />
                <NavDrawer CloseDrawer={this.CloseDrawer}
                            DrawerStatus={this.state.DrawerOpen}
                            />

                  <div className='AppContentWrap'>

                    <Switch>

                      <Route path='/' exact component={Landing} />
                      <Route path='/shop/bikes' component={ProductPageBikes} />
                      <Route path='/shop/trail' component={ProductPageTrail} />
                      <Route path='/shop/downhill' component={ProductPageDownHill} />
                      <Route path='/shop/s-works' component={ProductPageSWorks} />
                      <Route path='/user-sign-in' component={SignIn} />
                      <Route path='/account-creation' component={AccountCreation} />
                      <Route path='/user-cart' component={Cart} />
                      <Route path='/retailers' component={Retailer} />
                      <Route path='/inside-specialized' component={InsideSpecialized} />

                    </Switch>

                  </div>

              <FullFooter />
            <MobileFooter />

          </div>
      </div>

      </ScrollToTop>
     
    )
  }
}
