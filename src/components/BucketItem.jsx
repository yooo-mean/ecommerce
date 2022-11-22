import styled from 'styled-components';

const BucketItem = ({ thumbnail, name, price, onClickRemoveButton }) => {
  return (
    <>
      <BasketItemStyled>
        <RowLayout>
          <RowLayout>
            <ProductImage style={{ backgroundImage: `url(${thumbnail})` }} />
            <ColumnLayout>
              <ProductName>{name}</ProductName>
              <div>{price}원</div>
            </ColumnLayout>
          </RowLayout>
          <CloseButton onClick={onClickRemoveButton}>X</CloseButton>
        </RowLayout>
      </BasketItemStyled>
      <GrayLine />
    </>
  );
}
export default BucketItem;

const BasketItemStyled = styled.div`
  padding: 16px;
  margin: 10px 0px;
  display: flex;
  justify-content: center;
`;
const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap:15px;
  width: 500px;
`;
const ColumnLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductImage = styled.div`
  width: 120px;
  height: 100px;
  background-size: cover;
  background-position: center;
`;
const CloseButton = styled.div`
  cursor: pointer;
`;
const ProductName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #000000;
`;
const GrayLine = styled.div`
  height:1px;
  width:100%;
  background: #eeeeee;
`;