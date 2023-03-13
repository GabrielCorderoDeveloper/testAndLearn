import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/index.js';
import './index.css';

// function App(props) {
//   return (
//     <h1>{props.saludo}, {props.name}!</h1>
//     );
// }

// function withSaludo(WrappedComponent) {
//     return function WrappedComponentWithSaludo(saludo) {
//       return function ComponenteDeverdad(props) {
//         return (
//           <>
//             <WrappedComponent {...props} saludo={saludo}/>
//             <p>Estamos acompañando al W component</p>
//           </>
//         );
//       }
//     }
//  }

//  const AppWithSaludo = withSaludo(App)('Buenas');


  const root = ReactDOM.createRoot(
    document.getElementById('root')
  );
  const element = <App />;
  // const element = <AppWithSaludo name="Nathan"/>;
  root.render(element);