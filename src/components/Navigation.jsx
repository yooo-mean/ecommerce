import styled from 'styled-components';

const Navigation = () => {
  return(
    <>
      <NavigationStyled>유민몰</NavigationStyled>
      <GrayLine />
    </>
  )
}

const NavigationStyled = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;

  padding: 20px 152px 17px 151px;
`;

const GrayLine = styled.div`
  height: 1px;
  background: gray;

`;

export default Navigation;