import React from 'react';
import axios from 'axios';
import Overview from './Overview.jsx';
import Categories from './Categories.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchPhrase: '',
      reviewList: [],
      ratings: [],
      totalAverage: '',
      totalReview: '',
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
    axios.get('/rooms/1/reviews')
      .then(({ data }) => {
        console.log(data);
        this.setState({
          reviewList: data,
          ratings: data.ratings,
          totalAverage: data.totalAverage,
          totalReview: data.reviewsCount,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getAllReviews();
  }

  render() {
    return (
      <div>
        <h4> Hello from React</h4>
        <Overview
          totalAverage={this.state.totalAverage}
          totalReview={this.state.totalReview}
          searchInputHandle={this.searchInputHandle}
          searchPhrase={this.state.searchPhrase}
          clearField={this.clearField}
        />
        <Categories ratings={this.state.ratings} />
      </div>
    );
  }
}
export default App;
