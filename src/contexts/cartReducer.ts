import { CartItem } from '@/types/cart';

type CartAction =
  | { type: 'ADD_TO_CART'; item: CartItem }
  | { type: 'UPDATE_QUANTITY'; itemName: string; newQuantity: number };

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find((i) => i.name === action.item.name);
      if (existingItem) {
        return state.map((i) =>
          i.name === action.item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...state, { ...action.item, quantity: 1 }];
      }
    case 'UPDATE_QUANTITY':
      return state.map((i) =>
        i.name === action.itemName ? { ...i, quantity: action.newQuantity } : i
      );
    default:
      return state;
  }
};

export type { CartAction };
export default cartReducer;
