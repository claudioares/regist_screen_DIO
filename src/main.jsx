import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './main/main';
import GlobalStyle from './global_styled/styled';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>
)
