import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../data/mockData';
import styled from 'styled-components';
import Navigation from '../components/Navigation'
import { useNavigate } from 'react-router-dom';
import * as storage from '../utils/storage';
import ProductCard from '../components/ProductCard';

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
    navigate("/mypage");
    }
  
  return(
    <>
    <NavSection><Navigation /></NavSection>
      <ProductDetailStyled>
        <ProductStyled>
          {product && (
            <>
              <DetailImgStyled src={product.thumbnail}/>
              <DetailNameStyled>{product.name}</DetailNameStyled>
              <DetailPriceStyled>{product.price} 원</DetailPriceStyled>
            </>
          )}
        </ProductStyled>

        <BtnSection>
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
              <ProductCard 
              onClick={() => navigate(`/product/${product.id}`)}
              key={product.id}
              name={product.name}
              description={product.description}
              thumbnail={product.thumbnail}
            />
          ) : (
            <ReviewPage>리뷰를 위한 페이지 입니다.</ReviewPage>
          )}

          <AddBucketBox onClick={onClickAddBucketBox}>장바구니에 담기</AddBucketBox>
        </BtnSection>
      </ProductDetailStyled>
    </>
  );
};

const NavSection = styled.div`
  display: flex;
`

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
  
  margin-left: 50px;
  margin-top: 20px;
`;

const ReviewPage = styled.div`
  height: 390px;
`;

const ProductDetailStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ProductStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

const BtnSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  margin-top: 30px;
`;

const BtnBox = styled.div`
  display:flex;
  flex-direction: row;
  margin-left: 10px;
`;

const DetailImgStyled = styled.img`
  width: 390px;
  height: 420px;
  object-fit: cover;
`;

const DetailNameStyled = styled.div`
  padding-top: 24px;
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

  padding-top: 5px;
`;

const GrayLine = styled.div`
  width: 390px;
  height: 1px;
  background: #EEEEEE;
  margin-left: 35px;
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
