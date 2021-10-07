import React from 'react';
import { useParams } from 'react-router';
import { products } from '../productsData/products';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const easing = [0.6, 0.05, -0.01, 0.9];
const ProductDetails = () => {
  const id = useParams().productId;

  const product = products.filter((product) => product.id === id)[0];

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

  return (
    <motion.div className="product" exit={{ opacity: 0 }}>
      {/* left side */}
      <motion.div
        className="product__image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.6, ease: easing } }}
      >
        <motion.img
          src={product.image}
          alt=""
          initial={{ x: 50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { ease: easing, delay: 0.2 },
          }}
        />
      </motion.div>

      {/* right side */}
      <div className="product__details">
        <motion.div
          className="product__detailsContainer"
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.1 }}
        >
          <Link to="/" className="back-btn">
            <motion.p variants={fadeInUp}>Back to products</motion.p>
          </Link>

          <motion.div variants={fadeInUp} className="product__content">
            <p>protein</p>
            <h1>{product.name}</h1>
            <p>{product.details}</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="product__quantity">
            <p>
              <span>-</span> 1 <span>+</span>
            </p>
            <h2>{product.price}</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="product__buttons">
            <motion.button whileHover={{ scale: 0.95 }}>
              ADD TO CART
            </motion.button>
            <button>SUBSCRIBE</button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
