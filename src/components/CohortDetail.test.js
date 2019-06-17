import React from 'react';
import { shallow } from 'enzyme';
import { CohortDetail } from './CohortDetail.js';
import Navigation from './Navigation.js';
import BarGraph from './BarGraph.js';
import { fetchCohort } from '../store/actions';

describe('Cohort Detail', () => {
    const cohortDetails = {
      bootcamp: {
        label: 'i have not attended a bootcamp',
        value: 19
      }
    };
    let params = 'cohort-6';
  it('renders div', () => {
    const wrapper = shallow(<CohortDetail id={params} />);
    expect(wrapper.find('div')
        .exists())
        .toBe(true)
        
    // expect(wrapper.find(ListItem)).toHaveLength(cohortDetails.length);
});
  it('runs change handler when clicked', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
        <Navigation buttons={[1]} onChange={onChange} />
    );
    wrapper
    .find('button')
    .first()
    .simulate('click');
    expect(onChange).toHaveBeenCalled();
  })
});
