export interface Ingredient {
  id: string;
  name: string;
  category: 'vegetable' | 'meat' | 'seafood' | 'grain' | 'dairy' | 'spice' | 'fruit' | 'other';
}

// Common ingredients organized by category
export const ingredients: Ingredient[] = [
  // Vegetables
  { id: 'tomato', name: '番茄', category: 'vegetable' },
  { id: 'potato', name: '土豆', category: 'vegetable' },
  { id: 'onion', name: '洋葱', category: 'vegetable' },
  { id: 'carrot', name: '胡萝卜', category: 'vegetable' },
  { id: 'cucumber', name: '黄瓜', category: 'vegetable' },
  { id: 'eggplant', name: '茄子', category: 'vegetable' },
  { id: 'green-pepper', name: '青椒', category: 'vegetable' },
  { id: 'garlic', name: '大蒜', category: 'vegetable' },
  { id: 'ginger', name: '生姜', category: 'vegetable' },
  { id: 'cabbage', name: '白菜', category: 'vegetable' },
  { id: 'mushroom', name: '蘑菇', category: 'vegetable' },
  { id: 'spinach', name: '菠菜', category: 'vegetable' },
  { id: 'tofu', name: '豆腐', category: 'vegetable' },
  { id: 'spring-onion', name: '葱', category: 'vegetable' },
  
  // Meats
  { id: 'pork', name: '猪肉', category: 'meat' },
  { id: 'beef', name: '牛肉', category: 'meat' },
  { id: 'chicken', name: '鸡肉', category: 'meat' },
  { id: 'duck', name: '鸭肉', category: 'meat' },
  { id: 'lamb', name: '羊肉', category: 'meat' },
  
  // Seafood
  { id: 'fish', name: '鱼', category: 'seafood' },
  { id: 'shrimp', name: '虾', category: 'seafood' },
  { id: 'crab', name: '蟹', category: 'seafood' },
  { id: 'squid', name: '鱿鱼', category: 'seafood' },
  { id: 'scallop', name: '扇贝', category: 'seafood' },
  
  // Grains
  { id: 'rice', name: '米饭', category: 'grain' },
  { id: 'noodle', name: '面条', category: 'grain' },
  { id: 'flour', name: '面粉', category: 'grain' },
  
  // Dairy
  { id: 'egg', name: '鸡蛋', category: 'dairy' },
  { id: 'milk', name: '牛奶', category: 'dairy' },
  { id: 'cheese', name: '奶酪', category: 'dairy' },
  
  // Spices
  { id: 'salt', name: '盐', category: 'spice' },
  { id: 'sugar', name: '糖', category: 'spice' },
  { id: 'pepper', name: '胡椒', category: 'spice' },
  { id: 'soy-sauce', name: '酱油', category: 'spice' },
  { id: 'vinegar', name: '醋', category: 'spice' },
  { id: 'cooking-wine', name: '料酒', category: 'spice' },
  { id: 'chili', name: '辣椒', category: 'spice' },
  { id: 'star-anise', name: '八角', category: 'spice' },
  { id: 'cinnamon', name: '肉桂', category: 'spice' },
  { id: 'bay-leaf', name: '香叶', category: 'spice' },
  
  // Fruits
  { id: 'apple', name: '苹果', category: 'fruit' },
  { id: 'banana', name: '香蕉', category: 'fruit' },
  { id: 'orange', name: '橙子', category: 'fruit' },
  { id: 'lemon', name: '柠檬', category: 'fruit' },
  { id: 'strawberry', name: '草莓', category: 'fruit' },
  
  // Other
  { id: 'peanut', name: '花生', category: 'other' },
  { id: 'sesame', name: '芝麻', category: 'other' },
  { id: 'walnut', name: '核桃', category: 'other' },
];

export const ingredientsByCategory = ingredients.reduce((acc, ingredient) => {
  if (!acc[ingredient.category]) {
    acc[ingredient.category] = [];
  }
  acc[ingredient.category].push(ingredient);
  return acc;
}, {} as Record<string, Ingredient[]>);

export const categoryNames: Record<string, string> = {
  'vegetable': '蔬菜',
  'meat': '肉类',
  'seafood': '海鲜',
  'grain': '主食',
  'dairy': '蛋奶',
  'spice': '调料',
  'fruit': '水果',
  'other': '其他'
};
