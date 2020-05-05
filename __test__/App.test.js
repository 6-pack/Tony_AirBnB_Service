import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/components/App.jsx';

describe('Render Test', () => {
  test('It should render App', () => {
    const wrapper = mount(<App/>);
    expect(wrapper.exists()).toBe(true);
  });

  test('It should invoke getAllReview when componentDidMount', () => {
    const wrapper = mount(<App/>);
    const mock = jest.fn();
    wrapper.instance().getAllReviews = mock;
    wrapper.instance().forceUpdate();
    wrapper.instance().componentDidMount();
    expect(mock).toHaveBeenCalled();
  })
});

  // note: ** bad-test, Do not test internal STATE !! test the actual display value in the children component **
  // describe('Function Test', () => {
  //   const AppWrapper = mount(<App/>);
  //   AppWrapper.instance().searchInputHandle('abc');

  //   test('It should handle search Input', () => {
  //     expect(AppWrapper.state('searchPhrase')).toEqual('abc')
  //   })

  //   test('It should handle clear Input', () => {
  //     AppWrapper.instance().clearField();
  //     expect(AppWrapper.state('searchPhrase')).toEqual('')
  //   })
  // })



