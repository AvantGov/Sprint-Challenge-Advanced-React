import React from 'react';
import ReactDOM from 'react-dom';
import CardContainer from './components/CardContainer';

it('should render when mounted', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardContainer />, div);
})
