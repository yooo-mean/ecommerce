import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Logo = () => {
  const navigate = useNavigate();

  return(
  <LogoStyled
  onClick={()=>{navigate(`/`)}}>유민몰</LogoStyled>
  )
}

export default Logo;

const LogoStyled = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 26px;
`;