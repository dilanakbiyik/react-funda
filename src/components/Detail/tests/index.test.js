/**
 * Error component tests
 */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Detail from '../Detail'

Enzyme.configure({ adapter: new Adapter() });

describe('Error component', () => {
    it('should run wıthout error', () => {
        const component = Enzyme.shallow(<Detail/>);
    });
});
