import Navigation from '../components/Navigation';
import styled from 'styled-components';
import { getDoc } from "../apis/useDB"

var name, number, isok;

const Basket = () => {

  const data = getDoc('board', 'Fy7wjB6oMtQz1rgb6QeB');
  data.then( (object) => {
    name = object.name;
    number = object.number;
    isok = object.sex;
  })

  return(
    <MPStyled>
      <Navigation />
      <MP>마이페이지</MP>
      <Title>이름</Title>
      <Result>{name}</Result>
      <Title>전화번호</Title>
      <Result>{number}</Result>
      <Title>성별</Title>
      <Result>{isok}</Result>
    </MPStyled>
  );
};

const MPStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MP = styled.div`
  background-color: black;
  color:white;
  width: 400px;
  height: 40px;
  padding-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
`;

const Title = styled.div`
  background-color: #EEEEEE;
  color: #0000009c;
  width:400px;
  height:40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
`;

const Result = styled.div`
  background-color: #0000009c;
  color: #EEEEEE;
  width:400px;
  height:40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
`;

export default Basket;