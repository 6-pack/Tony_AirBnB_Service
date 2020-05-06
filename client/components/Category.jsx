import React from 'react';
import styled from 'styled-components';

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 130px 110px 35px;
  justify-content: center;
  align-items: center;

`;

const CategoryName = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const CategoryBar = styled.div`
  display: flex;
  border-radius: 5px;
  height: 5px;
  background-color: rgb(216, 216, 216);
  width: 100%;
`;

const ProgressBar = styled(CategoryBar)`
  background-color: rgb(41, 132, 137);
  width: ${ (4.1 / 5) * 100 }%;
`;

const CategoryRating = styled.div`
  display: flex;
  justify-content: flex-end;
  color: rgb(72, 72, 72);
  font-size: 16px;
  font-weight: 600;
`;


const Category = (props) => (
  <CategoryGrid>
    <CategoryName> Test </CategoryName>
    <CategoryBar>
      <ProgressBar/>
    </CategoryBar>
    <CategoryRating> 4.5 </CategoryRating>
  </CategoryGrid>
)

export default Category
