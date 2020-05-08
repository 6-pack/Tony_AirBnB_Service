import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Overview from './Overview/Overview.jsx';
import Categories from './Categories/Categories.jsx';
import ReviewsList from './ReviewsList/ReviewsList.jsx';

const StyledDiv = styled.div`
  width: 650px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchPhrase: '',
      reviewList: [],
      ratings: [],
      totalAverage: '',
      totalReview: '',
      pageSelected: 1,
      currentPage: '',
      pageCount: 1,
    };

    this.searchInputHandle = this.searchInputHandle.bind(this);
    this.clearField = this.clearField.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
    this.pageHandle = this.pageHandle.bind(this);
  }

  searchInputHandle(phrase) {
    this.setState({ searchPhrase: phrase });
  }

  clearField() {
    this.setState({ searchPhrase: '' });
  }

  getAllReviews() {
    axios.get('/rooms/2/reviews')
      .then(({ data }) => {
        console.log(data);
        const {pageCount, ratings, totalAverage, reviewsCount, pages} = data;
        this.setState({
          reviewList: data,
          ratings,
          totalAverage,
          totalReview: reviewsCount,
          currentPage: pages[0].reviews,
          pageCount,
        });
      })
      .catch((error) => console.log(error));
  }

  pageHandle(num) {
    const page = this.state.reviewList.pages[num-1].reviews
    console.log(num);
    this.setState({currentPage: page})
  }

  componentDidMount() {
    this.getAllReviews();
  }

  render() {
    const {totalAverage, totalReview, searchPhrase, ratings, reviewList, currentPage, pageCount} = this.state;
    return (
      <StyledDiv>
        <Overview
          totalAverage={totalAverage}
          totalReview={totalReview}
          searchInputHandle={this.searchInputHandle}
          searchPhrase={searchPhrase}
          clearField={this.clearField}
          />
        <Categories ratings={ratings} />

        <ReviewsList pageHandle={this.pageHandle} pageCount={pageCount} reviewList={currentPage}/>
      </StyledDiv>
    );
  }
}
export default App;
