
import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}



const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <header className="sticky top-0 z-50 glass border-b py-4 px-6">
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              料理寻觅
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              首页
            </Link>
            <Link 
              to="/recipes" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname.includes('/recipes') ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              菜谱
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="container max-w-6xl mx-auto px-4 py-6 md:py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      
      <footer className="border-t py-6 mt-10">
        <div className="container max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 料理寻觅 | 用现有食材发现美味菜谱</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
