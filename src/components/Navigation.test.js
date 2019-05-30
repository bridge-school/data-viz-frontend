import React from 'react';
import {shallow} from 'enzyme'
import Navigation from './Navigation';
describe("Navigation", () => {
    it('renders aside', () => {
      const wrapper = shallow(<Navigation keys={[]}/>)
      expect(wrapper.find('aside>nav')
        .exists())
        .toBe(true)
    });
    it('runs onChange handler from props when clicked', () => {
        const onChange = jest.fn();
      const wrapper = shallow(<Navigation keys={[1]} onChange={onChange}/>)
      wrapper.find('button').first()
      .simulate('click')
      expect(onChange)
        .toHaveBeenCalled()
    });
})
