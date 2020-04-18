import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16"
import CardContainer from './components/CardContainer';

Enzyme.configure( { adapter: new Adapter()})

it('should render when mounted', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardContainer />, div);
})

describe("Card Container", () => {
    it('should render cards', () => {
        const wrapper = shallow(<CardContainer />)
        const cards = wrapper.find('.player-card-container')

        expect(wrapper).contains(cards)
    })
})
