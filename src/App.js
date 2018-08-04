import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import lazyComponent from './hoc/lazyComponent/lazyComponent';
import {Route, Switch} from 'react-router-dom';


const Checkout = lazyComponent(() => import('./containers/Checkout/Checkout'));

const Orders = lazyComponent(() => import('./containers/Orders/Orders'));

class App extends Component {

  render() {

    return (

      <Switch>
        <Layout>
          <Route path='/checkout' exact component={Checkout} />
          <Route path='/orders' exact component={Orders} />
          <Route path='/' exact component={BurgerBuilder} />          
        </Layout>
      </Switch>
    );
  }
}

export default App;
