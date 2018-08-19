import LoadingPage from '../../components/LoadingPage';
import React from 'react';
import { shallow } from 'enzyme';

test('should render the loading page', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});