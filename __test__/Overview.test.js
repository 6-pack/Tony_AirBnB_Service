import React from 'react';
import Overview from '../client/components/Overview.jsx';
import SearchReview from '../client/components/SearchReview.jsx';
import { shallow, mount } from 'enzyme';

test('It should render Overview component', () => {
  const wrapper = shallow(
    <Overview
      searchInputHandle={() => {}}
      clearField={() => {}}
      searchPhrase=''
    />
  );
  expect(wrapper.exists()).toEqual(true);
});
