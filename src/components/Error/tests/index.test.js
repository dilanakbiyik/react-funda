/**
 * Error component tests
 */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Error from '../Error'

Enzyme.configure({ adapter: new Adapter() });

describe('Error component', () => {
    it('should run wıthout error', () => {
        const component = Enzyme.shallow(<Error/>);
    });
});
