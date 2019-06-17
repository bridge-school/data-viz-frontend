import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';
import { Link } from 'react-router-dom';

describe('ListItem', () => {
  it('renders list item', () => {

    const wrapper = shallow(<ListItem key="" id=""/>);

    expect(wrapper.find('li').exists()).toBe(true);
    expect(wrapper.find(Link).exists()).toBe(true);
  });
});
