import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import './Styles/Global-Classes.scss';
import ScrollToTop from './Constant-Components/ScrollToTop/ScrollToTop';

//Constants
import FullNav from './Constant-Components/Navigation/FullNav/FullNav';
import MobileNav from './Constant-Components/Navigation/MobileNav/MobileNav';
import FullFooter from './Constant-Components/Footer/FullFooter/FullFooter';
import MobileFooter from './Constant-Components/Footer/MobileFooter/MobileFooter';
import NavDrawer from './Constant-Components/SideDrawers/NavDrawer/NavDrawer';

//Pages
import Landing from './Pages/1.Landing/Landing';
import Cart from './Pages/Cart/Cart';
import SignIn from './Pages/SignIn/SignIn';
import AccountCreation from './Pages/AccountCreation/AccountCreation';
import Retailer from './Pages/Retailer/Retailer';
import InsideSpecialized from './Pages/Inside-Specialized/InsideSpecialized';

  //ProductPage
  import ProductPageBikes from './Pages/2.ProductPage-Bikes/ProductPageBikes';
  import ProductPageTrail from './Pages/4.ProductPage-Trail/ProductPageTrail';
  import ProductPageDownHill from './Pages/3.ProductPage-DownHill/ProductPageDownHill';
  import ProductPageSWorks from './Pages/5.ProductPage-S-Works/ProductPageSWorks';

  //ItemPage
  import StumpJumperPro29 from './Pages/6.ItemPages/Trail/StumpJumperPro29/ItemPage-StumpJumperPro29';
import StumpJumperExpert29 from './Pages/6.ItemPages/Trail/StumpJumperExpert29/ItemPage-StumpJumperExpert29';
import StumpJumperExpert27 from './Pages/6.ItemPages/Trail/StumpJumperExpert27/ItemPage-StumpJumperExpert27';
import ItemPageDemoRacer29 from './Pages/6.ItemPages/DownHill/DemoRacer29/ItemPage-DemoRacer29';
import ItemPageDemoExpert29 from './Pages/6.ItemPages/DownHill/DemoExpert29/ItemPage-DemoExpert29';
import ItemPageDemoAlloy27 from './Pages/6.ItemPages/DownHill/DemoAlloy27/ItemPage-DemoAlloy27';

  





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
                      <Route path='/shop/bikes' exact component={ProductPageBikes} />
                      <Route path='/shop/trail' exact component={ProductPageTrail} />
                      <Route path='/shop/downhill' exact component={ProductPageDownHill} />
                      <Route path='/shop/s-works' exact component={ProductPageSWorks} />
                      <Route path='/user-sign-in' exact component={SignIn} />
                      <Route path='/account-creation' exact component={AccountCreation} />
                      <Route path='/user-cart' exact component={Cart} />
                      <Route path='/retailers' exact component={Retailer} />
                      <Route path='/inside-specialized' exact component={InsideSpecialized} />

                  {/* Trail */}
                      <Route path='/shop/trail/stumpjumper-pro-29' exact component={StumpJumperPro29}/>
                      <Route path='/shop/trail/stumpjumper-expert-29' exact component={StumpJumperExpert29}/>
                      <Route path='/shop/trail/stumpjumper-expert-27' exact component={StumpJumperExpert27}/>

                  {/* DownHill */}
                      <Route path='/shop/downhill/demo-racer-29' exact component={ItemPageDemoRacer29}/>
                      <Route path='/shop/downhill/demo-expert-29' exact component={ItemPageDemoExpert29}/>
                      <Route path='/shop/downhill/demo-alloy-27' exact component={ItemPageDemoAlloy27}/>
                      
                  {/* S-Works */}
                      
                   

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
