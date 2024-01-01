import Header from '@/components/organisms/Header';

export default function ListTemplate() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <Header currentPage="list" />
      <p>상품 리스트 페이지입니다.</p>
    </div>
  );
}
