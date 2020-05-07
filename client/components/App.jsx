import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Categories from './Categories.jsx';
import ReviewsList from './ReviewsList.jsx';

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
    };

    this.searchInputHandle = this.searchInputHandle.bind(this);
    this.clearField = this.clearField.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
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
        this.setState({
          reviewList: data,
          ratings: data.ratings,
          totalAverage: data.totalAverage,
          totalReview: data.reviewsCount,
          currentPage: data.pages[0].reviews,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getAllReviews();
  }

  render() {
    const {totalAverage, totalReview, searchPhrase, ratings, reviewList, currentPage} = this.state;
    return (
      <div>
        <h4> Hello from React</h4>
        <Overview
          totalAverage={totalAverage}
          totalReview={totalReview}
          searchInputHandle={this.searchInputHandle}
          searchPhrase={searchPhrase}
          clearField={this.clearField}
        />
        <Categories ratings={ratings} />
        <ReviewsList reviewList={currentPage}/>
      </div>
    );
  }
}
export default App;
