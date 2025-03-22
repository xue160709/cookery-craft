
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, ChefHat, CheckCircle2 } from 'lucide-react';
import { Recipe } from '../data/recipes';
import { ingredients } from '../data/ingredients';

interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Translate difficulty to Chinese
  const difficultyText = {
    easy: '简单',
    medium: '中等',
    hard: '困难'
  }[recipe.difficulty];
  
  // Difficulty color
  const difficultyColor = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  }[recipe.difficulty];
  
  // Format time
  const formatTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} 分钟`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} 小时 ${remainingMinutes > 0 ? `${remainingMinutes} 分钟` : ''}`;
  };

  // Get ingredient name from id
  const getIngredientName = (id: string) => {
    const ingredient = ingredients.find(i => i.id === id);
    return ingredient ? ingredient.name : id;
  };

  // Handle step completion toggle
  const toggleStepCompletion = (index: number) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter(i => i !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  // Auto-scroll to active step
  useEffect(() => {
    const element = document.getElementById(`step-${activeStep}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeStep]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative mb-8">
        <div className="rounded-xl overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="w-full h-64 object-cover sm:h-80 md:h-96"
          />
        </div>
      </div>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 md:text-4xl">{recipe.name}</h1>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColor}`}>
            <ChefHat className="inline-block w-4 h-4 mr-1.5" />
            难度: {difficultyText}
          </div>
          
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            <Clock className="inline-block w-4 h-4 mr-1.5" />
            时间: {formatTime(recipe.time)}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <motion.div 
          className="md:col-span-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sticky top-24">
            <h2 className="text-xl font-semibold mb-4">食材准备</h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <motion.li 
                  key={ingredient.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="flex justify-between items-center bg-secondary rounded-lg p-3"
                >
                  <span className="font-medium">{getIngredientName(ingredient.id)}</span>
                  <span className="text-muted-foreground text-sm">{ingredient.amount}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">烹饪步骤</h2>
          <div className="space-y-6">
            {recipe.steps.map((step, index) => (
              <motion.div 
                id={`step-${index}`}
                key={index}
                className={`relative pl-12 py-4 border-l-2 ${
                  activeStep === index ? 'border-primary' : 'border-border'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
              >
                <button 
                  className={`absolute left-0 top-4 flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold border-2 transition-colors ${
                    completedSteps.includes(index)
                      ? 'bg-primary/10 border-primary text-primary'
                      : activeStep === index
                      ? 'bg-secondary border-primary text-foreground'
                      : 'bg-muted border-border text-muted-foreground'
                  }`}
                  onClick={() => toggleStepCompletion(index)}
                >
                  {completedSteps.includes(index) ? <CheckCircle2 className="w-4 h-4" /> : index + 1}
                </button>
                
                <div 
                  className={`cursor-pointer ${activeStep === index ? 'text-foreground' : 'text-muted-foreground'}`}
                  onClick={() => setActiveStep(index)}
                >
                  <p className="text-base">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {recipe.tips && (
            <div className="mt-10 p-4 bg-secondary/50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">烹饪小贴士</h3>
              <ul className="space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="text-muted-foreground">
                    • {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RecipeDetail;
