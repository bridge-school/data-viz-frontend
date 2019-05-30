import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { Link } from 'react-router-dom';

describe('Header', () => {
  it('renders header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find(Link).exists()).toBe(true);
  });
});
