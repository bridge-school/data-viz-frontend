import React from 'react';
import { shallow } from 'enzyme';
import { CohortDetail } from './CohortDetail.js';
import Navigation from './Navigation.js';

describe('Cohort Detail', () => {
    // Setup
    const cohortDetails = {'gender':[
        {label: "woman", value: 39}, 
        {label: "non-binary", value: 2}, 
        {label: "man", value: 2}
    ]};
    const props = jest.fn();
    const currentButton = 'gender'
    const match = {params : {id: 'cohort-6'}};
    const onChange = jest.fn();
  it('renders div', () => {
    const wrapper = shallow(<CohortDetail match={match} cohortDetails={cohortDetails[currentButton]} buttons={currentButton} fetchCohort={props} />);
    expect(wrapper.find('div')
        .exists())
        .toBe(true) 
});
  it('runs change handler when clicked', () => {
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
