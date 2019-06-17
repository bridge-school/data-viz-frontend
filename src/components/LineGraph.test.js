import React from 'react';
import { shallow } from 'enzyme';
import LineGraph from './LineGraph';

describe('LineGraph', () => {
    it('renders line graph', () => {
        const wrapper = shallow(<LineGraph data=""/>);
        expect(wrapper.find('VictoryChart').exists()).toBe(true);
        expect(wrapper.find('VictoryAxis').exists()).toBe(true);
    });
});
