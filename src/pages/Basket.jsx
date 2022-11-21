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

  return(
    <LayoutStyled>
      <SideStyled>
        <Logo
        onClick={()=>{navigate(`/`)}}>유민몰</Logo>
        <UserInfo>정유민 님</UserInfo>
        <UserInfo>포인트 : 13928</UserInfo>

        <CheckRecord
        onClick={() => {onClickRecord("record")}}>구매내역</CheckRecord>
        <CheckRecord
        onClick={() => {onClickRecord("bucket")}}>장바구니</CheckRecord>
      </SideStyled>

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

    <div>상품 금액 : ({bucketItemCount})개</div>
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
const SideStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 50px;
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
  margin-top: 50px;
`

export default Basket;