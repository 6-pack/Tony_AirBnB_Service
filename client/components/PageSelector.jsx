import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
`;

const Page = styled.div`
  border: 1px solid white;
  display: flex;
  width: 32px;
  height: 32px;
  color: rgb(41, 132, 137);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

const SelectButton = styled(Page)`
  border: 1px solid rgb(41, 132, 137);

`;

class PageSelector extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      selectedPage: 1,
    }

    this.nextPageClickHandle = this.nextPageClickHandle.bind(this);
    this.previousPageClickHandle = this.previousPageClickHandle.bind(this);
  }

  nextPageClickHandle() {
    const page = this.state.selectedPage + 1;
    this.setState({selectedPage: page});
  }

  previousPageClickHandle() {
    const currentPage = this.state.selectedPage;
    const page = (currentPage > 1) ? currentPage -1 : 1;
    this.setState({selectedPage: page});
  }

  render() {
    return (
      <PageContainer>
        <SelectButton onClick={this.previousPageClickHandle}>&lsaquo;</SelectButton>
        <Page onClick={this.onClickHandle} value='1'>1 </Page>
        <Page>... </Page>
        <Page value='2'>2 </Page>
        <Page value='3'>3 </Page>
        <Page>4</Page>
        <Page>... </Page>
        <Page>10</Page>
        <SelectButton onClick={this.nextPageClickHandle} value='next'>&rsaquo;</SelectButton>
      </PageContainer>
    )
  }
};

export default PageSelector;
