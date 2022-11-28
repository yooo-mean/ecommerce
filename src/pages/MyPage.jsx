import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as storage from '../utils/storage';
import BucketItem from '../components/BucketItem';
import { useEffect } from 'react';

const MyPage = () => {
  const [record, setRecord] = useState(); //장바구니 혹은 구매내역을 보여주기 위한 스테이트
  const [bucketItems, setBucketItems] = useState(); //장바구니 아이템 스테이트
  const navigate = useNavigate(); //페이지 이동을 위한 네비게이트
  const [bucketItemCount, setBucketItemCount] = useState(); // 장바구니 상품의 양 스테이트
  var sumItem;
  var point = 10000;

  useEffect(()=>  {
    //1. 장바구니 데이터 가져오기
    const items = storage.getBucketItems();
    setBucketItems(items);
    setBucketItemCount(items.length);
  }, []);

  const onClickRecord = (record) => {
    setRecord(record);
  };

  useEffect(() => {
    const items = storage.getBucketItems();
    setBucketItems(items);
  }, [bucketItemCount]);

  const onClickRemoveButton = (productId) => {
    storage.removeBucketItem(productId);
    setBucketItemCount(bucketItemCount - 1);
  };

  const onChangePoint = () => {

  }

  sumItem = 0;
  bucketItems && 
    bucketItems.map((item) => (
      sumItem += item.price
    ))
  sumItem += (2500 * bucketItemCount);

  /*const data = getDoc('board', 'Fy7wjB6oMtQz1rgb6QeB');
  data.then( (object) => {
    name = object.name;
    number = object.number;
    isok = object.sex;
  })*/

  return(
    <LayoutStyled>
      <WidthStyled>
        <SideStyled>
          <Logo
          onClick={()=>{navigate(`/`)}}>유민몰</Logo>
          <UserInfo>정유민 님</UserInfo>
          <UserInfo>포인트 : {point}</UserInfo>

          <CheckSection>
            <CheckRecord
            onClick={() => {onClickRecord("record")}}>구매내역</CheckRecord>
            <CheckRecord
            onClick={() => {onClickRecord("bucket")}}>장바구니</CheckRecord>
          </CheckSection>
        </SideStyled>

        <ItemStyled>
          {record === "record" ? (
            <>
              <GrayLiner />
              <BuyHistory>상품 개수 : ({bucketItemCount})개</BuyHistory>
              <BuyHistory>배송비 : {2500 * bucketItemCount}원</BuyHistory>
              <BuyHistory>총 주문금액 : ({sumItem})원</BuyHistory>
              <BuyHistory>포인트 사용 : ()원</BuyHistory>
              <GrayLiner />
            </>
          ) : (
            bucketItems && 
              bucketItems.map((item) => (
                <BucketItem 
                  key={item.id}
                  thumbnail={item.thumbnail}
                  name={item.name}
                  price={item.price}
                  onClickRemoveButton={()=>onClickRemoveButton(item.id)}
                />
              ))
          )}
        </ItemStyled>

        <PriceSortStyled>
          <PriceStyled>상품 개수 : ({bucketItemCount})개</PriceStyled>
          <PriceStyled>배송비 : {2500 * bucketItemCount}원</PriceStyled>
          <PriceStyled>총 주문금액 : ({sumItem})원</PriceStyled>
          <PriceStyled></PriceStyled>
          <PriceStyled>포인트 사용</PriceStyled>
          <PriceStyled><Input />/{point}</PriceStyled>
          <PayButton onClick={()=>setRecord("record")}>결제하기</PayButton>
        </PriceSortStyled>
      </WidthStyled>
    </LayoutStyled>
  );
};

const Input = styled.input`
  border: none;
  width: 100px;
`;
const GrayLiner = styled.div`
  height:1px;
  width:550px;
  background: #363636;
`;
const BuyHistory = styled.div`
  background-color: #eeeeee;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */

  letter-spacing: -0.01em;

  /* Gray_02 */

  color: #000000;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const CheckSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
const PayButton = styled.button`
  width: 200px;
  height: 70px;
  //position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  
  margin-top: 50px;

  background: #24DBAF;
`;
const PriceSortStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  background-color: #eeeeee;
  padding: 15px;
  border-radius: 15px;
  margin-top: 50px;
`;
const PriceStyled = styled.div`
font-weight: 500;
font-size: 18px;
line-height: 21px;
/* identical to box height, or 131% */

letter-spacing: -0.01em;

/* Gray_02 */

color: #616161;
`;
const WidthStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:130px;
`;
const ItemStyled = styled.div`
  //display: flex;
  margin-top: 30px;
`;
const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const SideStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  margin-top: 70px;
`;
const Logo = styled.div`
  font-weight: 700;
  font-size: 70px;
  line-height: 26px;
  //padding-left: 80px;
  //margin-top: 60px;
  margin-bottom: 40px;
`;
const UserInfo = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  padding-top: 10px;
`;
const CheckRecord = styled.button`
    background: rgba(0, 0, 0, 0.5);
  //border-radius: 10px;

  color: #FFFFFF;

  font-weight: 600;
  font-size: 20px;
  line-height: 26px;

  width: 200px;
  padding: 20px 0px;
  margin-bottom: 5px;
  
  border: none;
`

export default MyPage;