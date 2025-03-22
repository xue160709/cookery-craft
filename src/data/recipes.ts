
import { Ingredient } from './ingredients';

export interface Recipe {
  id: string;
  name: string;
  image: string;
  ingredients: {
    id: string;
    amount: string;
  }[];
  steps: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  time: number; // In minutes
  tips?: string[];
}

export const recipes: Recipe[] = [
  {
    id: 'tomato-egg-stir-fry',
    name: '番茄炒蛋',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1000&auto=format&fit=crop',
    ingredients: [
      { id: 'tomato', amount: '2个' },
      { id: 'egg', amount: '3个' },
      { id: 'salt', amount: '适量' },
      { id: 'sugar', amount: '1小勺' },
      { id: 'spring-onion', amount: '少量' },
    ],
    steps: [
      '将鸡蛋打入碗中，加入少许盐，搅拌均匀。',
      '热锅倒油，油热后倒入蛋液，炒至金黄色，盛出备用。',
      '锅中留底油，放入切块的番茄，翻炒至出汁。',
      '加入少许盐和糖，炒至番茄软烂。',
      '倒入炒好的鸡蛋，翻炒均匀。',
      '撒上葱花，即可出锅。'
    ],
    difficulty: 'easy',
    time: 15,
    tips: ['番茄炒制时间不要过长，以保持酸甜口感。', '可以根据个人口味调整盐和糖的用量。']
  },
  {
    id: 'kung-pao-chicken',
    name: '宫保鸡丁',
    image: 'https://images.unsplash.com/photo-1606628367835-69d363a04ead?q=80&w=1000&auto=format&fit=crop',
    ingredients: [
      { id: 'chicken', amount: '300克' },
      { id: 'peanut', amount: '50克' },
      { id: 'cucumber', amount: '1个' },
      { id: 'chili', amount: '5-8个' },
      { id: 'garlic', amount: '3瓣' },
      { id: 'ginger', amount: '1小块' },
      { id: 'spring-onion', amount: '2根' },
      { id: 'soy-sauce', amount: '2汤匙' },
      { id: 'vinegar', amount: '1汤匙' },
      { id: 'sugar', amount: '1小勺' },
    ],
    steps: [
      '鸡肉切成小丁，用酱油、料酒、淀粉腌制10分钟。',
      '花生米用油炸至金黄色，捞出备用。',
      '热锅倒油，爆香蒜末、姜末和干辣椒。',
      '倒入腌制好的鸡丁，翻炒至变色。',
      '加入黄瓜丁，翻炒均匀。',
      '调入酱油、醋、糖，炒匀。',
      '加入花生米和葱花，翻炒均匀即可出锅。'
    ],
    difficulty: 'medium',
    time: 30,
    tips: ['腌制鸡肉时加入一点淀粉可以保持肉质鲜嫩。', '辣椒可以根据个人口味增减。']
  },
  {
    id: 'hot-and-sour-soup',
    name: '酸辣汤',
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1000&auto=format&fit=crop',
    ingredients: [
      { id: 'tofu', amount: '100克' },
      { id: 'egg', amount: '1个' },
      { id: 'mushroom', amount: '50克' },
      { id: 'carrot', amount: '1个' },
      { id: 'vinegar', amount: '2汤匙' },
      { id: 'pepper', amount: '1小勺' },
      { id: 'salt', amount: '适量' },
    ],
    steps: [
      '豆腐、香菇、胡萝卜切丝。',
      '锅中放入清水，煮沸后加入香菇丝。',
      '待汤再次煮沸后，加入胡萝卜丝和豆腐丝。',
      '蛋液倒入碗中，搅拌均匀，缓慢倒入汤中，形成蛋花。',
      '加入胡椒粉、盐和醋，调味。',
      '撒上葱花，即可食用。'
    ],
    difficulty: 'easy',
    time: 20,
    tips: ['醋应在出锅前加入，以保持酸味。', '可以根据个人口味调整酸辣程度。']
  },
  {
    id: 'mapo-tofu',
    name: '麻婆豆腐',
    image: 'https://images.unsplash.com/photo-1570275239925-4af0aa537db7?q=80&w=1000&auto=format&fit=crop',
    ingredients: [
      { id: 'tofu', amount: '400克' },
      { id: 'pork', amount: '100克' },
      { id: 'chili', amount: '适量' },
      { id: 'garlic', amount: '3瓣' },
      { id: 'spring-onion', amount: '2根' },
      { id: 'soy-sauce', amount: '1汤匙' },
    ],
    steps: [
      '豆腐切成小方块，放入热水中烫一下，捞出备用。',
      '热锅倒油，爆香蒜末和辣椒。',
      '放入肉末，炒至变色。',
      '加入豆腐，轻轻翻炒。',
      '加入酱油，炖煮片刻。',
      '撒上葱花，即可出锅。'
    ],
    difficulty: 'medium',
    time: 25,
    tips: ['豆腐煮的时候要轻轻翻动，避免碎裂。', '可以加入豆瓣酱提升风味。']
  },
  {
    id: 'sweet-sour-pork',
    name: '糖醋里脊',
    image: 'https://images.unsplash.com/photo-1585518419529-5a2e31fcce55?q=80&w=1000&auto=format&fit=crop',
    ingredients: [
      { id: 'pork', amount: '300克' },
      { id: 'egg', amount: '1个' },
      { id: 'sugar', amount: '2汤匙' },
      { id: 'vinegar', amount: '2汤匙' },
      { id: 'tomato', amount: '1个' },
      { id: 'cucumber', amount: '1个' },
    ],
    steps: [
      '里脊肉切成条，用蛋清、盐和淀粉腌制10分钟。',
      '热油锅，炸里脊肉至金黄色，捞出备用。',
      '锅中留少许油，爆香蒜末。',
      '加入糖和醋，煮沸。',
      '放入番茄块和黄瓜块，炒匀。',
      '倒入炸好的里脊肉，翻炒均匀即可出锅。'
    ],
    difficulty: 'medium',
    time: 35,
    tips: ['腌制肉时加入一点淀粉可以保持肉质鲜嫩。', '糖醋汁可以根据个人口味调整酸甜比例。']
  },
  {
    id: 'egg-fried-rice',
    name: '蛋炒饭',
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=1000&auto=format&fit=crop',
    ingredients: [
      { id: 'rice', amount: '1碗' },
      { id: 'egg', amount: '2个' },
      { id: 'carrot', amount: '半个' },
      { id: 'green-pepper', amount: '半个' },
      { id: 'spring-onion', amount: '1根' },
      { id: 'salt', amount: '适量' },
    ],
    steps: [
      '将米饭提前煮好，放凉备用。',
      '胡萝卜和青椒切小丁。',
      '热锅倒油，打入鸡蛋，炒散。',
      '加入胡萝卜丁和青椒丁，翻炒均匀。',
      '倒入凉米饭，用铲子将米饭打散。',
      '加入适量盐，翻炒均匀。',
      '撒上葱花，即可出锅。'
    ],
    difficulty: 'easy',
    time: 15,
    tips: ['最好用隔夜饭制作，口感更佳。', '炒饭时火候要大，快速翻炒，使米粒分明。']
  },
  {
    id: 'fish-fragrant-eggplant',
    name: '鱼香茄子',
    image: 'https://images.unsplash.com/photo-1605699753774-88c5150d895c?q=80&w=1000&auto=format&fit=crop',
    ingredients: [
      { id: 'eggplant', amount: '2个' },
      { id: 'pork', amount: '100克' },
      { id: 'garlic', amount: '3瓣' },
      { id: 'ginger', amount: '1小块' },
      { id: 'spring-onion', amount: '1根' },
      { id: 'soy-sauce', amount: '1汤匙' },
      { id: 'vinegar', amount: '1汤匙' },
      { id: 'sugar', amount: '1小勺' },
    ],
    steps: [
      '茄子切段，用油炸至表面金黄，捞出沥油。',
      '热锅倒油，爆香蒜末、姜末。',
      '放入肉末，炒至变色。',
      '加入茄子，翻炒均匀。',
      '调入酱油、醋、糖，炒匀。',
      '撒上葱花，即可出锅。'
    ],
    difficulty: 'medium',
    time: 30,
    tips: ['茄子吸油，可以先用热水焯一下再炸，减少吸油量。', '可以加入豆瓣酱提升风味。']
  },
  {
    id: 'boiled-beef-slices',
    name: '水煮牛肉',
    image: 'https://images.unsplash.com/photo-1611489142329-5f62cfa43e6e?q=80&w=1000&auto=format&fit=crop',
    ingredients: [
      { id: 'beef', amount: '300克' },
      { id: 'cabbage', amount: '半颗' },
      { id: 'chili', amount: '10个' },
      { id: 'garlic', amount: '5瓣' },
      { id: 'ginger', amount: '1小块' },
      { id: 'spring-onion', amount: '2根' },
      { id: 'soy-sauce', amount: '2汤匙' },
    ],
    steps: [
      '牛肉切薄片，用料酒、盐和淀粉腌制15分钟。',
      '白菜切大片，铺在锅底。',
      '锅中倒入清水，放入白菜，煮沸。',
      '将腌好的牛肉片放入锅中，煮至变色。',
      '另起一锅，放入油，爆香蒜末、姜末和干辣椒。',
      '将热油浇在煮好的牛肉上。',
      '撒上葱花，即可食用。'
    ],
    difficulty: 'hard',
    time: 40,
    tips: ['牛肉切片要薄且垂直于肉纹，保证口感嫩滑。', '辣椒可以根据个人口味增减。']
  }
];

// Utility function to match recipes based on ingredients
export function findRecipesByIngredients(ingredientIds: string[]): Recipe[] {
  return recipes
    .map(recipe => {
      const recipeIngredients = recipe.ingredients.map(i => i.id);
      const matchCount = ingredientIds.filter(id => recipeIngredients.includes(id)).length;
      const matchPercentage = matchCount / recipeIngredients.length;
      
      return {
        ...recipe,
        matchCount,
        matchPercentage
      };
    })
    .filter(r => r.matchCount > 0)
    .sort((a, b) => b.matchPercentage - a.matchPercentage);
}
