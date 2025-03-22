
import React from 'react';
import { motion } from 'framer-motion';
import { slideUp, slideDown } from '../lib/animations';

const Hero: React.FC = () => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.div {...slideDown(0.1)} className="mb-4 md:mb-6">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full">
            用现有食材做美食
          </span>
        </motion.div>
        
        <motion.h1 
          {...slideDown(0.2)}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 md:leading-tight"
        >
          发现并烹饪 <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">适合你的菜谱</span>
        </motion.h1>
        
        <motion.p 
          {...slideDown(0.3)}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          告诉我们你家冰箱里有什么，我们会为你匹配最适合的菜谱，让烹饪变得简单又有趣。
        </motion.p>
        
        <motion.div 
          {...slideUp(0.4)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#ingredient-selector"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            开始选择食材
          </a>
          <a 
            href="/recipes"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            浏览全部菜谱
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
