import React from 'react';
import { shallow } from 'enzyme';
import CohortDetail from './CohortDetail.js';
import { Provider } from 'react-redux';

describe('Cohort Detail', () => {
  it('renders ', () => {
    const wrapper = shallow(<Provider><CohortDetail store={[]}/></Provider>);
    expect(wrapper.find('div.results--container')
    .exists())
    .toBe(true);
  });
//   it('runs onChange handler from props when clicked', () => {
//     // const onChange = jest.fn();
//     const wrapper = shallow(<Provider><CohortDetail/></Provider>).dive();
//     console.log(wrapper)
//     // wrapper
//     //   .find('button')
//     //   .first()
//     //   .simulate('click');
//     // expect(onChange).toHaveBeenCalled();
//   });
});
