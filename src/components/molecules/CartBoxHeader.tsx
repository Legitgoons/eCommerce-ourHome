export default function CartBoxHeader() {
  return (
    <div className="w-full h-20 flex items-center bg-Tertiary p1s">
      <p className="flex-grow">상품명</p>
      <div className="w-2/5 flex justify-between">
        <p className="w-1/3">구매가</p>
        <p className="w-32">수량</p>
        <p className="w-1/3">금액</p>
      </div>
    </div>
  );
}
