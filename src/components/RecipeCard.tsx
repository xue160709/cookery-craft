
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

interface RecipeCardProps {
  id: string;
  name: string;
  image: string;
  difficulty: 'easy' | 'medium' | 'hard';
  time: number;
  matchPercentage?: number;
  ingredientCount?: number;
  totalIngredients?: number;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  name,
  image,
  difficulty,
  time,
  matchPercentage,
  ingredientCount,
  totalIngredients
}) => {
  // Translate difficulty to Chinese
  const difficultyText = {
    easy: '简单',
    medium: '中等',
    hard: '困难'
  }[difficulty];
  
  // Difficulty color
  const difficultyColor = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  }[difficulty];
  
  // Format time
  const formatTime = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} 分钟`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} 小时 ${remainingMinutes > 0 ? `${remainingMinutes} 分钟` : ''}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-background border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
    >
      <Link to={`/recipe/${id}`} className="block h-full">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Match percentage badge, if provided */}
          {matchPercentage !== undefined && (
            <div className="absolute top-3 right-3 z-20 glass px-2 py-1 rounded-full text-xs font-medium">
              匹配度: {Math.round(matchPercentage * 100)}%
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          
          <div className="flex items-center space-x-4 mb-3">
            <div className={`px-2 py-0.5 rounded-full text-xs ${difficultyColor}`}>
              <ChefHat className="inline-block w-3 h-3 mr-1" />
              {difficultyText}
            </div>
            
            <div className="flex items-center text-muted-foreground text-xs">
              <Clock className="inline-block w-3 h-3 mr-1" />
              {formatTime(time)}
            </div>
          </div>
          
          {/* Ingredient match info, if provided */}
          {ingredientCount !== undefined && totalIngredients !== undefined && (
            <div className="text-sm text-muted-foreground">
              所需食材: {ingredientCount}/{totalIngredients}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default RecipeCard;
