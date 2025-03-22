
import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface IngredientTagProps {
  id: string;
  name: string;
  onRemove: (id: string) => void;
}

const IngredientTag: React.FC<IngredientTagProps> = ({ id, name, onRemove }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className="inline-flex items-center bg-secondary rounded-full px-3 py-1 mr-2 mb-2 transition-all duration-300 hover:shadow-md group"
    >
      <span className="text-sm font-medium mr-1">{name}</span>
      <button
        onClick={() => onRemove(id)}
        className="inline-flex items-center justify-center rounded-full w-5 h-5 bg-background text-foreground/50 hover:text-destructive hover:bg-destructive/10 transition-colors"
        aria-label={`Remove ${name}`}
      >
        <X size={12} />
      </button>
    </motion.div>
  );
};

export default IngredientTag;
