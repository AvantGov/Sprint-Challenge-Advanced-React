// * Dependencies 
import React from 'react';

// * hooks
import { useDarkMode } from './hooks/useDarkMode'

const HeaderContainer = () => {
    return (
        <div className="header-container">
          <h1 className="header-container__title"> WOMAN'S WORLD CUPS SOCCER ROSTER</h1>
          <button className="header-container__button" > Mode</button>
          
        </div>
    )
}

export default HeaderContainer;

