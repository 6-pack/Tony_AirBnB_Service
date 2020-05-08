import React from 'react';
import styled from 'styled-components';

const Page = styled.li`
  border: 1px solid ${ (props) => (props.selectedPage === props.Value) ? 'rgb(41, 132, 137)'  : 'white' };
  display: flex;
  width: 32px;
  height: 32px;
  color: ${ (props) => (props.selectedPage === props.Value) ? 'white' : 'rgb(41, 132, 137)'};
  background-color: ${ (props) => (props.selectedPage === props.Value) ? 'rgb(41, 132, 137)' : 'none'};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;

const PageNumber = ({selectedPage, value}) => {

  return (
    <Page selectedPage={selectedPage} Value={value}>
      {value}
    </Page>
  )
}

export default PageNumber;





// <Page selectedPage={selectedPage} Value={pageCount-2} value={pageCount-2}> {pageCount-2}</Page>


// const Page = styled.li`
//   border: 1px solid ${ (props) => (props.selectedPage === props.Value) ? 'rgb(41, 132, 137)'  : 'white' };
//   display: flex;
//   width: 32px;
//   height: 32px;
//   color: ${ (props) => (props.selectedPage === props.Value) ? 'white' : 'rgb(41, 132, 137)'};
//   background-color: ${ (props) => (props.selectedPage === props.Value) ? 'rgb(41, 132, 137)' : 'none'};
//   border-radius: 50%;
//   justify-content: center;
//   align-items: center;
//   margin: 0px 5px;
// `;