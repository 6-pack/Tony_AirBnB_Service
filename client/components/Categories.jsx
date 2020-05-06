import React from 'react';
import styled from 'styled-components';
import _ from 'underscore';
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
    { _.map(props.ratings, (rating, name) => <Category name={name} rating={rating} />)}
  </ScoreGrid>
)

export default Categories;
