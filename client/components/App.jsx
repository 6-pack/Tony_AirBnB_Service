import React from "react";
import Overview from "./Overview.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchPhrase: '',
      reviewList: [],
    }

    this.searchInputHandle = this.searchInputHandle.bind(this);
    this.clearField = this.clearField.bind(this);
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  searchInputHandle(phrase) {
    this.setState({searchPhrase: phrase})
  }

  clearField() {
    this.setState({searchPhrase: ''});
  }

  getAllReviews() {
    axios.get('/rooms/2/reviews')
    .then(result => {
      console.log(result);
      this.setState({reviewList: result.data})
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getAllReviews();
  }

  render() {
    return (
      <div>
        <h4> Hello from React</h4>
        <Overview
          searchInputHandle = {this.searchInputHandle}
          searchPhrase = {this.state.searchPhrase}
          clearField = {this.clearField}
        />
      </div>
    )
  }
}
export default App;