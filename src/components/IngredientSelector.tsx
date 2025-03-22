
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import SearchBar from './SearchBar';
import IngredientTag from './IngredientTag';
import { ingredients, ingredientsByCategory, categoryNames } from '../data/ingredients';

interface IngredientSelectorProps {
  initialIngredients?: string[];
}

const IngredientSelector: React.FC<IngredientSelectorProps> = ({ initialIngredients = [] }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(initialIngredients);
  const navigate = useNavigate();

  // Handle adding an ingredient
  const handleAddIngredient = (ingredient: { id: string; name: string }) => {
    if (!selectedIngredients.includes(ingredient.id)) {
      setSelectedIngredients([...selectedIngredients, ingredient.id]);
    }
  };

  // Handle removing an ingredient
  const handleRemoveIngredient = (id: string) => {
    setSelectedIngredients(selectedIngredients.filter(ingredientId => ingredientId !== id));
  };

  // Get selected ingredient names for display
  const getSelectedIngredientNames = () => {
    return selectedIngredients.map(id => {
      const ingredient = ingredients.find(i => i.id === id);
      return { id, name: ingredient?.name || id };
    });
  };

  // Handle search button click
  const handleSearch = () => {
    if (selectedIngredients.length > 0) {
      navigate(`/recipes?ingredients=${selectedIngredients.join(',')}`);
    }
  };

  // Common ingredients for quick selection
  const commonIngredients = [
    { id: 'tomato', name: '番茄' },
    { id: 'potato', name: '土豆' },
    { id: 'onion', name: '洋葱' },
    { id: 'egg', name: '鸡蛋' },
    { id: 'chicken', name: '鸡肉' },
    { id: 'pork', name: '猪肉' },
    { id: 'rice', name: '米饭' },
    { id: 'noodle', name: '面条' }
  ];

  // Quick add common ingredient
  const handleQuickAdd = (ingredient: { id: string; name: string }) => {
    if (!selectedIngredients.includes(ingredient.id)) {
      setSelectedIngredients([...selectedIngredients, ingredient.id]);
    }
  };

  return (
    <div id="ingredient-selector" className="relative max-w-3xl mx-auto p-6 md:p-8 glass rounded-2xl border border-white/10 shadow-xl transition-all duration-300">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">选择你的食材</h2>
        <p className="text-muted-foreground">搜索或选择你家中有的食材，我们会推荐适合的菜谱</p>
      </div>
      
      <div className="mb-6">
        <SearchBar 
          onSelect={handleAddIngredient} 
          selectedIngredients={selectedIngredients} 
        />
      </div>
      
      {/* Selected ingredients */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">已选食材:</h3>
        <div className="min-h-12">
          <AnimatePresence>
            {getSelectedIngredientNames().map(ingredient => (
              <IngredientTag
                key={ingredient.id}
                id={ingredient.id}
                name={ingredient.name}
                onRemove={handleRemoveIngredient}
              />
            ))}
          </AnimatePresence>
          
          {selectedIngredients.length === 0 && (
            <p className="text-sm text-muted-foreground italic">
              还没有选择食材
            </p>
          )}
        </div>
      </div>
      
      {/* Common ingredients */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">常用食材:</h3>
        <div className="flex flex-wrap gap-2">
          {commonIngredients.map(ingredient => (
            <button
              key={ingredient.id}
              onClick={() => handleQuickAdd(ingredient)}
              disabled={selectedIngredients.includes(ingredient.id)}
              className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                selectedIngredients.includes(ingredient.id)
                  ? 'bg-primary/20 text-primary cursor-not-allowed'
                  : 'bg-secondary hover:bg-secondary/80 hover-lift'
              }`}
            >
              {ingredient.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Search button */}
      <div className="mt-8">
        <button
          onClick={handleSearch}
          disabled={selectedIngredients.length === 0}
          className={`w-full flex items-center justify-center gap-2 rounded-lg ${
            selectedIngredients.length === 0
              ? 'bg-muted text-muted-foreground cursor-not-allowed'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          } py-3 font-medium transition-all duration-200`}
        >
          <Search size={18} />
          <span>寻找菜谱</span>
        </button>
      </div>
    </div>
  );
};

export default IngredientSelector;
