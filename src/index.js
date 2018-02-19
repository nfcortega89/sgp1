import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAypiJ6eVwaxjlLfcDdVjFX7JIj-H-zkkg';

// Create a new component. This component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// Component needs to be inserted into the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
