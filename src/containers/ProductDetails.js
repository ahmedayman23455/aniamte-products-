import { motion } from 'framer-motion';
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { products } from '../data/products';

const easing = [0.6, -0.05, 0.01, 0.9];
const transition = { duration: 0.5, ease: easing };

function ProductDetails({ menuIsOpen, setMenuIsOpen, setCursorHovered }) {
  const productId = useParams().productId;

  const productActive = products.filter(
    (product) => product.id === productId
  )[0];

  return (
    <motion.div
      className="product__details"
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <Header
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={setMenuIsOpen}
        setCursorHovered={setCursorHovered}
      />
      <div className="product__detailsContainer">
        <div className="product__detailsImage">
          <img src={productActive.thumbnail} alt="" />
        </div>
        <h1>{productActive.title}</h1>
      </div>
    </motion.div>
  );
}

export default ProductDetails;
