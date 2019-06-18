import React from 'react';
import { shallow } from 'enzyme';
import { CohortDetail } from './CohortDetail.js';
import Navigation from './Navigation.js';
import Loader from './Loader.js';
import BarGraph from './BarGraph';


describe('Cohort Detail', () => {
    // Setup
    const props = jest.fn();
    const currentButton = 'gender'
    const match = {params : {id: 'cohort-6'}};
    const onChange = jest.fn();
  it('renders div', () => {
    const wrapper = shallow(<CohortDetail match={match} cohortDetails={currentButton} buttons={currentButton} fetchCohort={props} />);
    expect(wrapper.find('div.results--container')
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
    it('renders loader with cohortLoading = true', () => {
    const wrapper = shallow(<CohortDetail match={match} cohortDetails={currentButton} buttons={currentButton} fetchCohort={props} cohortLoading={true} />);
    const mockLoader = wrapper.find(Loader);
    expect(mockLoader).toHaveLength(1)
    });
    it('renders BarGraph with cohortLoading = false', () => {
    const wrapper = shallow(<CohortDetail match={match} cohortDetails={currentButton} buttons={currentButton} fetchCohort={props} cohortLoading={false} />);
    const mockGraph = wrapper.find(BarGraph);
    expect(mockGraph).toHaveLength(1)
    })
});
