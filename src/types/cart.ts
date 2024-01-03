/** CartItem
 * @param {string} imgSrc 이미지 주소
 * @param {string} name 제품명
 * @param {number} price 제품 가격
 * @param {number} originalPrice 제품 원래 가격 (할인 전 가격, 옵션)
 * @param {number} quantity 수량
 */

export interface CartItem {
  imgSrc: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
}
