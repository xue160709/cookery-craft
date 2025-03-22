
import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ingredients } from '../data/ingredients';

interface SearchBarProps {
  onSelect: (ingredient: { id: string; name: string }) => void;
  selectedIngredients: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSelect, selectedIngredients }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<typeof ingredients>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter ingredients when query changes
  useEffect(() => {
    if (query.length > 0) {
      const filtered = ingredients
        .filter(ingredient => 
          !selectedIngredients.includes(ingredient.id) && 
          ingredient.name.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 8);
      setResults(filtered);
      setIsOpen(filtered.length > 0);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, selectedIngredients]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (ingredient: typeof ingredients[0]) => {
    onSelect(ingredient);
    setQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
          <Search size={18} />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          className="bg-background border border-input rounded-lg block w-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
          placeholder="搜索食材..."
          aria-label="搜索食材"
        />
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-1 glass rounded-lg shadow-lg divide-y divide-border overflow-hidden"
          >
            <ul>
              {results.map(ingredient => (
                <li key={ingredient.id}>
                  <button
                    onClick={() => handleSelect(ingredient)}
                    className="w-full text-left px-4 py-2 hover:bg-secondary/50 transition-colors duration-150 flex items-center"
                  >
                    <span>{ingredient.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
