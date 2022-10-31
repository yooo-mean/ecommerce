import styled from 'styled-components';

const ProductCard = ({name, description, thumbnail, onClick}) => {
  return(
  <ProductCardStyled onClick={onClick}>
    <ImgStyled 
    width="200"
    src={thumbnail}
    alt={name} />
    <NameStyled>{name}</NameStyled>
    <DescStyled>{description}</DescStyled>
  </ProductCardStyled>
  )
}

const ProductCardStyled = styled.div`
  padding: 40px 24px 0px;
`;

const ImgStyled = styled.img`
  width:341px;
  height:204px;

  object-fit: cover;
`;

const NameStyled = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  padding: 12px 0px 12px;
`;

const DescStyled = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`;

export default ProductCard;