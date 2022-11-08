import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../data/mockData';
import styled from 'styled-components';
import Navigation from '../components/Navigation'
import { useNavigate } from 'react-router-dom';
import * as storage from '../utils/storage';

const ProductDetail = () => {
  let {productId} = useParams(); // productId를 받아오는 로직(logic to receive parameter productId)
  const [product, setProduct] = useState();
  const [btnDetail, setDetail] = useState();
  const navigate = useNavigate();

  const onClickDetailButton = (value) => {
    if(value === "detail") {
      setDetail("detail");
    }
    else if(value === "review") {
      setDetail("review");
    }
  }

  useEffect(() => {
    const result = getProductDetail(productId);
    //productId 값과 목데이터의 id 값이 같은 데이터를 받아 result에 넣어 product 스테이트 값에 저장
    //store data if productId and id in mockData are the same.
    setProduct(result);
    setTimeout(() => {
      setDetail("detail");
    }, 100);
  }, [productId]);

  const onClickAddBucketBox = () => {
    //장바구니에 아이템을 추가한다.
    storage.addBucket(product);
    //장바구니 페이지로 이동한다
    navigate("/bucketBox");
    }
  
  return(
    <ProductDetailStyled>

      {product && (
        <>
          <DetailImgStyled src={product.thumbnail}/>
          <DetailNameStyled>{product.name}</DetailNameStyled>
          <DetailPriceStyled>{product.price}</DetailPriceStyled>
        </>
      )}
      <GrayLine />
      
      <BtnBox>
        <DetailBtn onClick={() => {
          onClickDetailButton("detail");
        }}>상품 상세</DetailBtn>
        <DetailBtn onClick={() => {
          onClickDetailButton("review");
        }}>상품 후기</DetailBtn>
      </BtnBox>

      <GrayLine />

      {btnDetail === "detail" ? (
        <img 
        src="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg" 
        alt="제품 상세 정보"
        width="400" />
      ) : (
        <div>리뷰를 위한 페이지 입니다.</div>
      )}

      <AddBucketBox onClick={onClickAddBucketBox}>장바구니에 담기</AddBucketBox>
    </ProductDetailStyled>
  );
};

const AddBucketBox = styled.button`
  width: 400px;
  height: 70px;
  //position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  font-weight: 700;
  font-size: 16px;
  line-height: 21px;

  background: #24DBAF;
`;

const ProductDetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailImgStyled = styled.img`
  width: 390px;
  height: 420px;
  object-fit: cover;
`;

const DetailNameStyled = styled.div`
  padding: 24px 220px 8px 0px;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  letter-spacing: -0.01em;
`;

const DetailPriceStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  letter-spacing: -0.01em;

  color: rgba(0, 0, 0, 0.86);

  padding: 0px 305px 23px 0px;
`;

const GrayLine = styled.div`
  width: 390px;
  height: 1px;
  background: #EEEEEE;
`;

const BtnBox = styled.div`
  display:flex;
  flex-direction: row;
`;

const DetailBtn = styled.button`
  background: #FFFFFF;
  width: 195px;
  height: 48px;

  font-weight: 700;
  font-size: 16px;
  line-height: 21px;

  text-align: center;
  letter-spacing: -0.01em;

  color: #000000;
  border: 0;
  outline: 0;
`;


export default ProductDetail;
