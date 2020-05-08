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
    this.props.paginationHandle(page)

  }

  previousPageClickHandle() {
    const page = this.state.selectedPage - 1;
    this.setState({selectedPage: page});
    this.props.paginationHandle(page)
  }

  render() {
    const {pageCount} = this.props;
    const {selectedPage} = this.state;
    return (
      <PageContainer>
        {(selectedPage === 1) ?
          null : <SelectButton onClick={this.previousPageClickHandle}>&lsaquo;</SelectButton>}

        <Page onClick={this.onClickHandle} value='1'>1 </Page>

        {(selectedPage >= 5) ? <Page>... </Page> : null }

        <Page>2</Page>
        <Page>3</Page>
        <Page>4</Page>
        <Page>5</Page>

        {(selectedPage <= pageCount - 4) ? <Page>... </Page> : null}
        <Page>10</Page>
        {(selectedPage < pageCount) ?
          <SelectButton onClick={this.nextPageClickHandle}>&rsaquo;</SelectButton> : null}
      </PageContainer>
    )
  }
};

export default PageSelector;
