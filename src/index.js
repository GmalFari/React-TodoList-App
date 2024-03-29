import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const DATA = [
  {name:"Eat" ,  id:"todo-0" ,  completed:true},
  {name:"Sleap" ,  id:"todo-1" ,  completed:false},
  {name:"Repeat" ,  id:"todo-2" ,  completed:false}

]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
