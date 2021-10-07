import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import Home from './containers/Home';
import ProductDetails from './containers/ProductDetails';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.pathname} location={location}>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/products/:productId">
            <ProductDetails />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
