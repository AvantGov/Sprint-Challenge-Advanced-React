import React from 'react';
import ReactDOM from 'react-dom';
import HeaderContainer from './components/HeaderContainer';

it('should render when mounted', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderContainer />, div);
})
