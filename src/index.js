import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDOM => es una libreria que instala las dependencias necesarias para poder
//renderizar react en el navegador
ReactDOM.render(
  //le dice que tiene que renderizar (como primer parametro)
  <React.StrictMode>
    {/* componenete "App" */}
    <App />
  </React.StrictMode>,
    // y donde lo tiene que renderizar
    //en la carpeta public en algun archivo .html
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
