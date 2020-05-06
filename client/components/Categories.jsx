import React from 'react';
import styled from 'styled-components';
import Category from './Category.jsx';

const ScoreGrid = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 650px;
  height: 90px;
  border-bottom: 1px solid rgb(216, 216, 216);
  margin-bottom: 8px;
`;

const Categories = (props) => (
  <ScoreGrid>
    <Category/>
    <Category/>
    <Category/>
    <Category/>
    <Category/>
    <Category/>
  </ScoreGrid>
)

export default Categories;
