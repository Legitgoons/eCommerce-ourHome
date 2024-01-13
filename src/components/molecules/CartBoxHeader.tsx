export default function CartBoxHeader() {
  return (
    <div className="p1s flex h-20 w-full items-center bg-Tertiary">
      <p className="grow">상품명</p>
      <div className="flex w-2/5 justify-between">
        <p className="w-1/3">구매가</p>
        <p className="w-32">수량</p>
        <p className="w-1/3">금액</p>
      </div>
    </div>
  );
}
