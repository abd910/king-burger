import { Product, Deal } from './types';

export const MENU_ITEMS: Product[] = [
  {
    id: 'b1',
    name: 'The Royal Whopper',
    description: 'Flame-grilled double beef patty with melted cheddar, crisp lettuce, ripe tomatoes, onions, pickles, and our signature royal sauce on a toasted sesame bun.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop',
    category: 'burgers',
    calories: 850,
    isPopular: true,
  },
  {
    id: 'b2',
    name: 'Spicy Flame King',
    description: 'A fiery take on the classic with jalapeños, spicy pepper jack cheese, and our habanero mayo.',
    price: 9.49,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop',
    category: 'burgers',
    calories: 920,
    isSpicy: true,
  },
  {
    id: 'b3',
    name: 'Bacon BBQ Deluxe',
    description: 'Crispy bacon, sweet BBQ sauce, onion rings, and smoked provolone cheese.',
    price: 10.29,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop',
    category: 'burgers',
    calories: 1100,
  },
  {
    id: 's1',
    name: 'Flame-Grilled Fries',
    description: 'Our signature cut fries, seasoned to perfection.',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800&auto=format&fit=crop',
    category: 'sides',
    calories: 320,
    isPopular: true,
  },
  {
    id: 's2',
    name: 'Onion Ring Stack',
    description: 'Thick-cut, beer-battered onion rings served with zesty sauce.',
    price: 4.29,
    image: 'https://images.unsplash.com/photo-1639146175554-325301897b48?q=80&w=800&auto=format&fit=crop',
    category: 'sides',
    calories: 410,
  },
  {
    id: 'd1',
    name: 'Oreo Blast Shake',
    description: 'Creamy vanilla soft serve blended with Oreo cookie pieces.',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop',
    category: 'desserts',
    calories: 680,
    isPopular: true,
  }
];

export const DEALS: Deal[] = [
  {
    id: 'deal1',
    title: 'Family Feast Bundle',
    description: '2 Royal Whoppers, 2 Small Burgers, 2 Large Fries, and 4 Drinks.',
    discountPrice: 29.99,
    originalPrice: 42.50,
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'deal2',
    title: 'Lunch Break Special',
    description: 'Any burger with small fries and a regular drink.',
    discountPrice: 12.99,
    originalPrice: 16.50,
    image: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?q=80&w=800&auto=format&fit=crop',
  }
];
