
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import RecipeDetail from '../components/RecipeDetail';
import { recipes } from '../data/recipes';

const RecipeView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(recipes.find(r => r.id === id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    const timeout = setTimeout(() => {
      const foundRecipe = recipes.find(r => r.id === id);
      setRecipe(foundRecipe);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center py-20">
          <div className="animate-pulse space-y-8 w-full max-w-4xl">
            <div className="h-64 bg-muted rounded-xl w-full"></div>
            <div className="h-10 bg-muted rounded-lg w-1/3"></div>
            <div className="flex gap-4">
              <div className="h-8 bg-muted rounded-full w-24"></div>
              <div className="h-8 bg-muted rounded-full w-32"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="h-6 bg-muted rounded w-1/2"></div>
                <div className="h-12 bg-muted rounded-lg w-full"></div>
                <div className="h-12 bg-muted rounded-lg w-full"></div>
                <div className="h-12 bg-muted rounded-lg w-full"></div>
              </div>
              <div className="md:col-span-2 space-y-6">
                <div className="h-6 bg-muted rounded w-1/3"></div>
                <div className="h-20 bg-muted rounded-lg w-full"></div>
                <div className="h-20 bg-muted rounded-lg w-full"></div>
                <div className="h-20 bg-muted rounded-lg w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!recipe) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">菜谱未找到</h1>
          <p className="text-muted-foreground mb-8">
            抱歉，我们找不到您要查看的菜谱
          </p>
          <button
            onClick={() => navigate('/recipes')}
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-2 font-medium hover:bg-primary/90 transition-colors"
          >
            浏览所有菜谱
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            返回菜谱列表
          </button>
        </div>
        
        <RecipeDetail recipe={recipe} />
      </motion.div>
    </Layout>
  );
};

export default RecipeView;
