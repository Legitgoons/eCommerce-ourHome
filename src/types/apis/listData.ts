import { CardTag, TempStatus } from '../list';

/** ListCardData
 * @param {number} id 고유번호
 * @param {string} imgSrc 이미지 주소
 * @param {string} name 제품명
 * @param {string} detail 제품 상세 설명
 * @param {CardTag} tag 제품 태그 (옵션)
 * @param {number} price 제품 가격
 * @param {number} originalPrice 제품 원래 가격 (옵션)
 * @param {number} discountRate 할인률 (옵션)
 * @param {TempStatus} temp 제품 보관 방법
 */

export interface ListCardData {
  id: number;
  imgSrc: string;
  name: string;
  detail: string;
  tag?: CardTag;
  price: number;
  originalPrice?: number;
  discountRate?: number;
  temp: TempStatus;
}
