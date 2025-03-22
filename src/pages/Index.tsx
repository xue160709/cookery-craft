
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import IngredientSelector from '../components/IngredientSelector';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        
        <div className="py-10">
          <IngredientSelector />
        </div>
      </motion.div>
    </Layout>
  );
};

export default Index;
