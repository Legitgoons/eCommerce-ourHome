import { CartItem } from '@/types/cart';
import { CartAction } from '@/types/context';

/**
 * CartAction에 따라 상태를 업데이트하는 리듀서 함수
 * @param state - 현재 Cart 상태
 * @param action - 수행할 Action
 * @returns {CartItem[]} - 업데이트된 Cart 상태
 */
const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.find((i) => i.name === action.item.name);
      if (existingItem) {
        return state.map((i) =>
          i.name === action.item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
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

export default cartReducer;
