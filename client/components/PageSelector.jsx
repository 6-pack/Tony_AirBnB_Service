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
        {(selectedPage !== 1) && <SelectButton onClick={this.previousPageClickHandle}>&lsaquo;</SelectButton>}
        <Page>1</Page>

        {(selectedPage >= 5) ? <Page>...</Page> : null }

        {(selectedPage === pageCount) ? <Page>{pageCount-2}</Page> : (selectedPage >= 5) ? <Page>{selectedPage - 1}</Page> : <Page>2</Page>}
        {(selectedPage === pageCount) ? <Page>{pageCount-1}</Page> : (selectedPage >= 5) ? <Page>{selectedPage}</Page> : <Page>3</Page>}
        {(selectedPage >= pageCount - 1) ? null : (selectedPage >= 5) ? <Page>{selectedPage + 1}</Page> : (selectedPage >= 3) ? <Page>4</Page> : null }


        {(pageCount > 4 && selectedPage === 4) && <Page>5</Page>}

        {(selectedPage <= pageCount - 4) ? <Page>...</Page> : null}

        {(selectedPage === pageCount - 3) && <Page>{pageCount-1}</Page>}

        <Page> {pageCount} </Page>
        {(selectedPage < pageCount) && <SelectButton onClick={this.nextPageClickHandle}>&rsaquo;</SelectButton>}
      </PageContainer>
    )
  }
};

export default PageSelector;
