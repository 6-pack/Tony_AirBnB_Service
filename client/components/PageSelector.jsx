import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
`;

const Page = styled.li`
  border: 1px solid ${ (props) => (props.selectedPage === props.Value) ? 'blue'  : 'white' };
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
        {(selectedPage !== 1) && <SelectButton selectedPage={1} Value={0} onClick={this.previousPageClickHandle}>&lsaquo;</SelectButton>}
        <Page selectedPage={selectedPage} Value={1} value='1'>1</Page>

        {(selectedPage >= 5) && <Page selectedPage={selectedPage} Value={0}>...</Page>}

        {(selectedPage === pageCount) ? <Page selectedPage={selectedPage} Value={pageCount-2} value={pageCount-2}> {pageCount-2}</Page> : (selectedPage >= 5) ? <Page selectedPage={selectedPage} Value={selectedPage-1} value={selectedPage - 1}>{selectedPage - 1}</Page> : <Page selectedPage={selectedPage} Value={2} value='2'>2</Page>}
        {(selectedPage === pageCount) ? <Page selectedPage={selectedPage} Value={pageCount-1} value={pageCount-1}> {pageCount-1}</Page> : (selectedPage >= 5) ? <Page selectedPage={selectedPage} Value={selectedPage} value={selectedPage}>{selectedPage}</Page> : <Page selectedPage={selectedPage} Value={3} value='3'>3</Page>}
        {(selectedPage >= pageCount - 1) ? null : (selectedPage >= 5) ? <Page selectedPage={selectedPage} Value={selectedPage+1} value={selectedPage + 1}>{selectedPage + 1}</Page> : (selectedPage >= 3) ? <Page selectedPage={selectedPage} Value={4} value='4'>4</Page> : null }

        {(pageCount > 4 && selectedPage === 4) && <Page selectedPage={selectedPage} Value={5} value='5'>5</Page>}

        {(selectedPage <= pageCount - 4) && <Page selectedPage={selectedPage} Value={0}>...</Page>}

        {(selectedPage === pageCount - 3) && <Page selectedPage={selectedPage} Value={pageCount-1} value={pageCount-1}>{pageCount-1}</Page>}

        <Page selectedPage={selectedPage} Value={pageCount} value={pageCount}> {pageCount} </Page>
        {(selectedPage < pageCount) && <SelectButton selectedPage={1} Value={0} onClick={this.nextPageClickHandle}>&rsaquo;</SelectButton>}
      </PageContainer>
    )
  }
};

export default PageSelector;


{/* <PageContainer>
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
      </PageContainer> */}