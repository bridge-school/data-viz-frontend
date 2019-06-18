import React from 'react';
import { shallow } from 'enzyme';
import { CohortList } from './CohortList';
import ListItem from './ListItem';

describe('CohortList', () => {
  it('renders list', () => {
    const applicants = ['7', '6', '5', '4'];
    const wrapper = shallow(<CohortList applicants={applicants} />);
    expect(wrapper.find('h1').text()).toEqual('Cohorts');
    expect(wrapper.find('ul').exists()).toBe(true);
    expect(wrapper.find(ListItem)).toHaveLength(applicants.length);
  });
});
