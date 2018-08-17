import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme'
import React from 'react';

test('should render loginPage', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on btnclick', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});