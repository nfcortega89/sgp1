import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component. This component should produce some HTML.

const App = () => {
  return <div>Hi!</div>;
};
// Component needs to be inserted into the DOM.

ReactDOM.render(<App />, document.querySelector('.container'));
