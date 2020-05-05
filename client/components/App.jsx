import React from "react";
import Overview from "./Overview.jsx";

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchPhrase: '',
    }

    this.searchInputHandle = this.searchInputHandle.bind(this);
    this.clearField = this.clearField.bind(this);
  }

  searchInputHandle(phrase) {
    this.setState({searchPhrase: phrase})
  }

  clearField() {
    this.setState({searchPhrase: ''});
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