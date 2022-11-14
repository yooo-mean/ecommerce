export const mockTheme1Products = [
    {
      id: 1,
      name: "비숑 블랙 머그잔",
      description:
        "쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다.",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg",
      price: "4,800원",
    },
    {
      id: 3,
      name: "가열 보온 티코스터 온열 원터치 컵 받침대",
      description:
        "언제나 따뜻하게 최대 2시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다.",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg",
      price: "66,800원",
    },
    {
      id: 10,
      name: "벨루즈까사 솜사탕 파스텔 머그 4종 세트",
      description:
        "솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그.",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg",
      price: "21,800원",
    },
    {
      id: 11,
      name: "블랙야크 경량패딩",
      description:
        "솜사탕처럼 가벼우면서도 이불 속 처럼 따듯한 블랙야크의 패딩",
      thumbnail:
        "https://img.danawa.com/prod_img/500000/655/880/img/12880655_1.jpg?shrink=330:330&_v=20201209174303",
      price: "1,800원",
    },
    {
      id: 12,
      name: "울트라쉴드 장갑",
      description:
        "이 장갑과 함께라면 광선빔도 막아낼 수 있어요!",
      thumbnail:
        "https://img.danawa.com/prod_img/500000/521/732/img/12732521_1.jpg?shrink=330:330&_v=20211126092637",
      price: "19,800원",
    },
    {
      id: 13,
      name: "BMW 핸들 커버",
      description:
        "당신이 현대차를 타던 기아차를 타던 상관없어요. 이제는 핸들 커버로 BMW 오너가 될테니까요!",
      thumbnail:
        "https://img.danawa.com/prod_img/500000/613/073/img/10073613_1.jpg?shrink=330:330&_v=20210414174559",
      price: "29,800원",
    },
  ];
  
  export const mockTheme2Products = [
    {
      id: 7,
      name: "쏘쿨 냉감 이불",
      description: "점점 더워지는 여름, 소쿨 냉감 이불 덮고 주무세요",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product4.jpg",
      price: "22,800원",
    },
    {
      id: 5,
      name: "리모컨 에어 서큘레이터",
      description: "자연 바람 그대로를 담은, 리모컨 에어 서큘레이터",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product5.jpg",
      price: "33,800원",

    },
    {
      id: 6,
      name: "얼음 트레이 얼음틀 36구 4p + 아이스큐브",
      description:
        "여름에만 얼음을 이용하지 않는 것처럼, 이제는 냉동실에 한번 얼려서 사계절 내내 드세요",
      thumbnail:
        "https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product6.jpg",
      price: "44,800원",
    },
    {
      id: 14,
      name: "라그나로크 선풍기",
      description: "토르의 집을 멸망시켰던 라그나로크도 이 선풍기 앞에선 무용지물입니다!",
      thumbnail:
        "https://img.danawa.com/prod_img/500000/591/835/img/16835591_1.jpg?shrink=330:330&_v=20220623090518",
      price: "19,800원",
    },
    {
      id: 15,
      name: "인계철선",
      description: "파천신군도 이 부채와 함께 무림을 평정했었죠!",
      thumbnail:
        "https://img.danawa.com/prod_img/500000/489/355/img/11355489_1.jpg?shrink=330:330&_v=20200521152410",
      price: "29,800원",

    },
    {
      id: 16,
      name: "프롬 아프리카 투 안타티카 에어컨",
      description:
        "아프리카의 더위도 남극의 추위로 바꿔버릴 수 있는 무시무시한 에어컨입니다 흐흐흐!",
      thumbnail:
        "https://img.danawa.com/prod_img/500000/069/534/img/9534069_1.jpg?shrink=330:330&_v=20190920161155",
      price: "39,800원",
    },
  ];

  export const getProductDetail = (productId) => {
    return [...mockTheme1Products, ...mockTheme2Products].find((product) => {
      return product.id === Number(productId);
    });
  };