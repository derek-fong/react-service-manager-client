import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CreateRequest from './requests/CreateRequest';
import RequestList from './requests/RequestList';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={RequestList} />
      <Route path="/create" component={CreateRequest} />
    </BrowserRouter>
  );
}

export default App;
