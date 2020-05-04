import React from 'react';
import styled from 'styled-components';


const SearchForm = styled.form`
border: 1px solid gray;
border-radius: 2px;
`;

const SearchReview = (props) => {
  return (
    <SearchForm>
      <input type="text" placeholder="Search Reviews" name="seach" value=""/>
      <button> <img src=""/>X</button>
      <button type="submit'"> <img src=''/></button>
    </SearchForm>
  )
}




export default SearchReview;