import React from 'react';
import styled from 'styled-components';

const Page = styled.a`
  border: 1px solid ${(props) => (props.selectedPage === props.Value) ? 'rgb(41, 132, 137)'  : 'white' };
  display: flex;
  width: 32px;
  height: 32px;
  color: ${(props) => (props.selectedPage === props.Value) ? 'white' : 'rgb(41, 132, 137)'};
  background-color: ${(props) => (props.selectedPage === props.Value) ? 'rgb(41, 132, 137)' : 'none'};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
  &:link, :visited {
  text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const PageNumber = ({pageHandle, selectedPage, value}) => {

  return (
    <Page href='#ReviewList' onClick={ () => pageHandle(value)} selectedPage={selectedPage} Value={value}>
      {value}
    </Page>
  )
}

export default PageNumber;
