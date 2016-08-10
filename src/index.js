import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyC-6rqknUnyht3rZVWvhdXbBYNsh98J9zw';


const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
