import React from 'react';
import ReactDOM from 'react-dom';
import   GlobalStyled  from '../src/components/GlobalStyled/GlobalStyled'
import  App   from './Pages/App';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




