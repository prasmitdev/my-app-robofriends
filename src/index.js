import React from 'react';  //View Library 
import ReactDOM from 'react-dom';  //Helps with DOM manipulation
import './index.css';
import CardList from './CardList';
import 'tachyons';
import robots from './robots'; 
// import App from './App';
ReactDOM.render(
    <CardList robots={robots}/>,
  document.getElementById('root')
);
