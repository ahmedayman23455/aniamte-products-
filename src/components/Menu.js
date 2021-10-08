import React from 'react';
import Header from './Header';
import { products } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItem';

/* -------------------------------- variants -------------------------------- */
const parent = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/* -------------------------------------------------------------------------- */
function Menu({ menuIsOpen, setMenuIsOpen, x, y, setCursorHovered }) {
  return (
    <>
      <AnimatePresence>
        {menuIsOpen && (
          <>
            <motion.div className="menu__container" exit={{ opacity: 0 }}>
              <Header
                menuIsOpen={menuIsOpen}
                setMenuIsOpen={setMenuIsOpen}
                setCursorHovered={setCursorHovered}
              />

              <motion.div
                className="menu__list"
                variants={parent}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {products.map(
                  ({
                    id,
                    title,
                    thumbnail,
                    h1Position,
                    thumbnailMargin,
                    offset,
                  }) => {
                    return (
                      <MenuItem
                        key={id}
                        id={id}
                        title={title}
                        thumbnail={thumbnail}
                        h1Position={h1Position}
                        thumbnailMargin={thumbnailMargin}
                        menuIsOpen={menuIsOpen}
                        setMenuIsOpen={setMenuIsOpen}
                        setCursorHovered={setCursorHovered}
                        offset={offset}
                        x={x}
                        y={y}
                      />
                    );
                  }
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
