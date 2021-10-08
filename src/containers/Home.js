import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';

function Home({ menuIsOpen, setMenuIsOpen, setCursorHovered }) {
  const easing = [0.6, -0.05, 0.01, 0.9];
  const transition = { duration: 0.5, ease: easing };
  return (
    <motion.div
      className="home__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition}
    >
      <Header
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        setCursorHovered={setCursorHovered}
      />
      <div className="home__cotent">
        <h1>Click on the menu button</h1>
      </div>
    </motion.div>
  );
}

export default Home;
