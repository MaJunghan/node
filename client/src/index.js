import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 여기에서 해당컴포먼트를 정의한것임 
// 위에서 App를 정의했기떄문에 app화면이 나오는것이고
// 여기서 바꿔주게되면 다른화면이 나옴.
ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>,
  document.getElementById('root')
  // pulbic폴더의 index.html 본문의내용을 getElementById로 root라고
  // 정해놨기떄문에 본문의 내용이 들어가는것임.
  // src만 웹팩의 기능을수행.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
