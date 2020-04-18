import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import HeaderContainer from './components/HeaderContainer';


Enzyme.configure( { adapter: new Adapter()})

describe('Header Container', () => {
    it('should render a button when mounted', () => {
        const wrapper = shallow(<HeaderContainer />)
        const button = wrapper.find(".header-container__button")

        expect(button.text()).toBe(' Mode')
    })

    it(' button should toggle darkmode', () => {
        const wrapper = shallow(<HeaderContainer />);
        const button = wrapper.find('.header-container__button')
        
        button.simulate('click');

        expect(document.body.classList).hasClass('dark-mode')
    })
})


