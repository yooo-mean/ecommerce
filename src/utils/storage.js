const BUCKET = "BUCKET";

export const getBucketItems = () => {
  //로컬 스토리지에 아이템이 있으면 JSON 스타일로 파싱해서
  //반환하고, 없으면 아무것도 반환하지 않는 함수.
  const items = localStorage.getItem(BUCKET);
  return (items ? JSON.parse(items) : []);
};

export const addBucket = (product) => {
  //아이템을 불러와서 장바구니에 추가하고 로컬 스토리지에 저장하는 함수
  let items = getBucketItems();
  //console.log(items);
  //동일 상품이 있으면 추가하지 않는 로직
  const isSameProduct = !!items.find((item) => item.id === product.id);
  //!!를 통해 object 객체인 경우엔 참을, null이나 언디파인드면 거짓을 반환
  //console.log(isSameProduct);
  if(!isSameProduct) {
    items.push(product);
    localStorage.setItem(BUCKET, JSON.stringify(items));
  }
};

export const removeBucketItem = (productId) => {
  //기존 장바구니 상품 리스트 가져오기
  let items = getBucketItems();
  //삭제할 상품 하나 제거한 리스트 만들기
  items = items.filter((item) => item.id !== productId )
  //로컬스토리지에서 장바구니 정보 날리기
  localStorage.removeItem(BUCKET);
  //다시 상품 리스트 저장하기.
  localStorage.setItem(BUCKET, JSON.stringify(items));

  console.log("----------4--------");
  console.log(getBucketItems());
}