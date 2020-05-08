import React from 'react';
import styled from 'styled-components';
import PageNumber from './PageNumber.jsx';

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  /* height: 100px; */
`;

const PageBreak = styled.span`
  display: flex;
  width: 32px;
  height: 32px;
  color: rgb(41, 132, 137);
  justify-content: center;
  align-items: center;
  margin: 0px 5px;

`;

const SelectButton = styled.div`
  display: flex;
  border: 1px solid rgb(41, 132, 137);
  border-radius: 50%;
  margin: 0px 5px;
  color: rgb(41, 132, 137);
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
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
      <Pagination>

        {(selectedPage !== 1) &&
          <SelectButton onClick={this.previousPageClickHandle}>&lsaquo;</SelectButton>}

        <PageNumber selectedPage={selectedPage} value={1} />

        {(selectedPage >= 5) && <PageBreak>...</PageBreak>}

        {(selectedPage === pageCount) ?
          <PageNumber selectedPage={selectedPage} value={pageCount-2} />  :
            (selectedPage >= 5) ?
              <PageNumber selectedPage={selectedPage} value={selectedPage-1}/> :
                <PageNumber selectedPage={selectedPage} value={2} /> }


        {(selectedPage === pageCount) ?
          <PageNumber selectedPage={selectedPage} value={pageCount-1} /> :
            (selectedPage >= 5) ?
              <PageNumber selectedPage={selectedPage} value={selectedPage} /> :
                <PageNumber selectedPage={selectedPage} value={3} /> }


        {(selectedPage >= pageCount - 1) ?
          null : (selectedPage >= 5) ?
            <PageNumber selectedPage={selectedPage} value={selectedPage+1} /> :
              (selectedPage >= 3) ?
                <PageNumber selectedPage={selectedPage} value={4} /> : null }

        {(pageCount > 4 && selectedPage === 4) &&
          <PageNumber selectedPage={selectedPage} value={5} /> }

        {(selectedPage <= pageCount - 4) && <PageBreak>...</PageBreak>}


        {(selectedPage === pageCount - 3) &&
          <PageNumber selectedPage={selectedPage} value={pageCount-1} /> }

        <PageNumber selectedPage={selectedPage} value={pageCount} />

        {(selectedPage < pageCount) &&
          <SelectButton onClick={this.nextPageClickHandle}>&rsaquo;</SelectButton>}

      </Pagination>
    )
  }
};

export default PageSelector;
