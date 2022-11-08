import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  const navigate = useNavigate();

  return(
    <>
      <NavigationStyled>
        <LogoStyled
        onClick={()=>{navigate(`/`)}}>유민몰</LogoStyled>
        <SearchBox></SearchBox>
        <BtnSearch>🔍︎</BtnSearch>
        <ToLogin
        onClick={()=>{navigate(`/`)}}>로그인</ToLogin>
        <ToSignUp
        onClick={()=>{navigate(`/`)}}>회원가입</ToSignUp>
        <ToMyPage
        onClick={()=>{navigate(`basket`)}}>마이페이지</ToMyPage>
      </NavigationStyled>
    </>
  )
}
const LogoStyled = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 26px;
`;
const NavigationStyled = styled.div`
  padding-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  width: 1000px;
`;
const SearchBox = styled.input`
  width: 50%;
  margin-left: 30px;
  height:35px;
  border-right: none;
`;
const BtnSearch = styled.button`
  height: 42px;
  width: 40px;
  background-color: white;
  border-left: none;
  font-size: 20px;

  margin-right: 30px;
`;
const ToLogin = styled.div`
  padding : 0px 3px 0px 3px;

  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
`;
const ToSignUp = styled.div`
  padding : 0px 3px 0px 3px;
  
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
`;
const ToMyPage = styled.div`
  padding : 0px 3px 0px 3px;
  
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
`;


export default Navigation;