import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('Loader', () =>{
    it('renders loader', ()=>{
        const wrapper = shallow(<Loader />)
        expect(wrapper.find('div').exists()
        ).toBe(true);
    });
});