import Header from '../organisms/Header';

export default function CartTemplate() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Header currentPage="cart" />
      <p>장바구니 페이지입니다.</p>
    </div>
  );
}
