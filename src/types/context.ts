import { CartItem } from './cart';

export type CartAction =
  | { type: 'ADD_TO_CART'; item: CartItem }
  | { type: 'UPDATE_QUANTITY'; itemName: string; newQuantity: number };
