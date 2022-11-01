const BUCKET = "BUCKET";

export const getBucketItems = () => {
  //로컬 스토리지에 아이템이 있으면 JSON 스타일로 파싱해서
  //반환하고, 없으면 아무것도 반환하지 않는 함수.
  const items = localStorage.getItem(BUCKET);
  return items ? JSON.parse(items) : [];
};

export const addBucket = (product) => {
  //아이템을 불러와서 장바구니에 추가하고 로컬 스토리지에 저장하는 함수
  let items = getBucketItems();

  //동일 상품이 있으면 추가하지 않는 로직
  const isSameProduct = !!items.find((item) => item.id === product.id);
  //!!를 통해 object 객체인 경우엔 참을, null이나 언디파인드면 거짓을 반환
  
  if(!isSameProduct) {
    items.push(product);
    localStorage.setItem(BUCKET, JSON.stringify(items));
  }
};