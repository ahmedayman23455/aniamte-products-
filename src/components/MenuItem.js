import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react/cjs/react.development';

const easing = [0.6, -0.05, 0.01, 0.9];
const transition = { duration: 0.5, ease: easing };

const titleSlideUp = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: transition,
  },
};

const lineWidth = {
  initial: { width: 0 },
  animate: { width: '100%', transition: { ...transition } },
};

const maskAnimation = {
  initial: { width: '100%' },
  animate: {
    width: 0,
    transition: { ...transition, duration: 1 },
  },
};
/* -------------------------------------------------------------------------- */
function MenuItem({
  id,
  title,
  thumbnail,
  h1Position,
  thumbnailMargin,
  menuIsOpen,
  setMenuIsOpen,
  offset,
  x,
  y,
  setCursorHovered,
}) {
  const [hoverState, setHoverState] = useState(false);
  const menuItem = useRef();
  const [listPosition, setListPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    setListPosition({
      left: menuItem.current.getBoundingClientRect().left,
      top: menuItem.current.getBoundingClientRect().top,
    });
  }, [hoverState]);

  return (
    <Link to={`/products/${id}`} key={id}>
      <div
        ref={menuItem}
        className="menu__product"
        onClick={() => {
          setMenuIsOpen(false);
        }}
      >
        <motion.h1
          style={{ left: h1Position.left }}
          variants={titleSlideUp}
          onMouseEnter={() => {
            setHoverState(true);
            setCursorHovered(true);
          }}
          onMouseLeave={() => {
            setHoverState(false);
            setCursorHovered(false);
          }}
        >
          {title}
        </motion.h1>

        <div
          className="menu__thumbnail"
          style={{ marginLeft: thumbnailMargin }}
        >
          <motion.div className="mask" variants={maskAnimation}></motion.div>
          <img src={thumbnail} alt="" />
        </div>

        <motion.div
          className="menu__floatingImage"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            opacity: hoverState ? 1 : 0,
            x: x - listPosition.left + offset,
            y: y - listPosition.top,
          }}
        >
          <img src={thumbnail} alt="" />
        </motion.div>

        <motion.div className="line" variants={lineWidth}>
          <motion.div className="mask" variants={maskAnimation}></motion.div>
        </motion.div>
      </div>
    </Link>
  );
}

export default MenuItem;
