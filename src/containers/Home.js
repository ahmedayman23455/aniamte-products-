import React from 'react';
import { products } from '../productsData/products';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const easing = [0.6, 0.05, -0.1, 0.9];

const fadeInUp = {
  initial: {
    y: 72,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Home = () => {
  const defaultStagger = 0.2;
  return (
    <motion.div className="home" exit={{ opacity: 0 }}>
      <div className="home__content">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, ease: easing } }}
        >
          Select a protein
        </motion.h1>

        <motion.div
          className="home__products"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: defaultStagger }}
        >
          {products.map(({ id, name, price, image }, index) => {
            return (
              <Link to={`/products/${id}`}>
                <motion.div
                  className="home__product"
                  key={id}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  <h3>Protein</h3>
                  <motion.img
                    src={image}
                    alt=""
                    initial={{ x: 50, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: index === 0 ? 0.2 : index * defaultStagger + 0.2,
                      },
                    }}
                  />
                  <div className="home__productDetails">
                    <h2>{name}</h2>
                    <p>{price}</p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
