import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './containers/Home';
import ProductDetails from './containers/ProductDetails';
import useMousePosition from './hooks/useMousePosition';

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [cursorHovered, setCursorHovered] = useState(false);
  const location = useLocation();

  const { x, y } = useMousePosition();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        {/* inside layout */}
        <Switch key={location.pathname} location={location}>
          <Route path="/" exact>
            <Home
              menuIsOpen={menuIsOpen}
              setMenuIsOpen={setMenuIsOpen}
              setCursorHovered={setCursorHovered}
            />
          </Route>

          <Route path="/products/:productId">
            <ProductDetails
              menuIsOpen={menuIsOpen}
              setMenuIsOpen={setMenuIsOpen}
              setCursorHovered={setCursorHovered}
            />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </AnimatePresence>

      <Menu
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        x={x}
        y={y}
        setCursorHovered={setCursorHovered}
      />
      <motion.div
        className="cursor"
        initial={{ opacity: 0 }}
        animate={{
          x: x - 16,
          y: y - 16,
          opacity: cursorHovered ? 0.8 : 0,
          scale: cursorHovered ? 1.2 : 1,
        }}
        transition={{ ease: 'linear', duration: 0.15 }}
      ></motion.div>
    </div>
  );
}

export default App;
