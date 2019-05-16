import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RequestList from './requests/RequestList';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={RequestList} />
    </BrowserRouter>
  );
}

export default App;
