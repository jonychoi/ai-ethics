import React, {useState, useEffect} from 'react';
import Header from './components/common/header';
import GlobalStyle from './styles/globalStyles';
import { ThemeEvent } from './contexts/globalContext';
import Main from './screen/main';

export const App = ({}) => {
  const {darkMode} = ThemeEvent();
  return (
    <div width="100vw" height="100vh">
      <GlobalStyle darkMode={darkMode} />
      <Header />
      <Main />
    </div>
  )
};

export default App;