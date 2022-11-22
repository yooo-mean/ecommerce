import Navigation from '../components/Navigation';
import styled from 'styled-components';
import { getDoc } from "../apis/useDB"
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import * as storage from '../utils/storage';
import BucketItem from '../components/BucketItem';
import { useEffect } from 'react';

var name, number, isok;

const Basket = () => {
  const [record, setRecord] = useState();
  const [bucketItems, setBucketItems] = useState();
  const navigate = useNavigate();
  const [bucketItemCount, setBucketItemCount] = useState();

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

  const data = getDoc('board', 'Fy7wjB6oMtQz1rgb6QeB');
  data.then( (object) => {
    name = object.name;
    number = object.number;
    isok = object.sex;
  })

  const getPrice = () => {
    const items = storage.getBucketItems();
    let price;
    items.map((item) => {
      price += item.price;
    })
    return price;
  }

  let price = getPrice();

  const onClickPayButton = () => {
    navigate(`/payment`)
  }

  return(
    <LayoutStyled>
      <WidthStyled>
      <SideStyled>
        <Logo
        onClick={()=>{navigate(`/`)}}>유민몰</Logo>
        <UserInfo>정유민 님</UserInfo>
        <UserInfo>포인트 : 13928</UserInfo>

        <CheckSection>
          <CheckRecord
          onClick={() => {onClickRecord("record")}}>구매내역</CheckRecord>
          <CheckRecord
          onClick={() => {onClickRecord("bucket")}}>장바구니</CheckRecord>
        </CheckSection>
      </SideStyled>

      <ItemStyled>
      {record === "record" ? (
        <div>구매 이력 페이집니다.</div>
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
      <PriceStyled>총 주문금액 : ({price})원</PriceStyled>
      <PayButton
      onClick={()=>onClickPayButton()}>결제하기</PayButton>
    </PriceSortStyled>
    </WidthStyled>
    </LayoutStyled>
  );
};

const CheckSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
const PayButton = styled.button`
  width: 155px;
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
font-weight: 400;
font-size: 16px;
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

export default Basket;