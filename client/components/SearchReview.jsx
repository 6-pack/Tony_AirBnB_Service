import React from 'react';
import styled from 'styled-components';


const SearchForm = styled.form`
  display: flex;
  border: 1px solid ${props => props.focused ? "blue" : "gray"};
  padding: 0px 8px;
  border-radius: 5px;
  align-items: center;
  justify-content: flex-end;
  height: 34px;
`;

const SearchInput = styled.input`
  border-style: hidden;
  outline: none;
  width: 158px;
  padding: 6px 7px 6px 0;
  font-size: 14px;
  line-height: 22px;
`;

const SearchIcon = styled.div`
  display: block;
  will-change: tranform;
  height: 14px;
  width: 15px;
  background-size: 14px 14px;
  background-image: url("https://i.imgur.com/JPBoBbB.png");
  background-repeat: space no-repeat;
  padding-left: 2px;
`;

const CancelIcon = styled.div`
  display: block;
  will-change: tranform;
  height: 14px;
  width: 15px;
  background-size: 14px 14px;
  background-repeat: space no-repeat;
  padding-left: 2px;
  ${ props => (props.hide) ? 'background-color: white' : 'background-image: url("https://i.imgur.com/jJPp1y6.png")'};

`;
// displayName so enzyme can find styled component
SearchInput.displayName = 'SearchInput';
SearchForm.displayName = 'SearchForm';
SearchIcon.displayName = 'SearchIcon';
CancelIcon.displayName = 'CancelIcon';

class SearchReview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isFocused: false,
    }

    this.onFocusHandle = this.onFocusHandle.bind(this);
    this.onBlurHandle = this.onBlurHandle.bind(this);
    this.searchHandle = this.searchHandle.bind(this);
    this.clearSearchHandle = this.clearSearchHandle.bind(this);
  }


  onFocusHandle() {
    this.setState({isFocused : true})
  }

  onBlurHandle() {
    this.setState({isFocused : false})
  }

  searchHandle(event) {
    this.props.searchInputHandle(event.target.value);
  }

  clearSearchHandle(){
    this.props.clearField();
  }

  render() {
    let focused = this.state.isFocused;
    return (
      <SearchForm focused = {focused} onFocus={this.onFocusHandle} onBlur={this.onBlurHandle} >
        <SearchInput type="text" placeholder="Search Reviews" name="seach"
                     value = {this.props.searchPhrase}
                     onChange = { this.searchHandle } />
        { (this.props.searchPhrase === '') ? <CancelIcon hide/> : <CancelIcon onClick = {this.clearSearchHandle}/> }
        <SearchIcon type='submit'/>
      </SearchForm>
    )
  }
}


export default SearchReview;