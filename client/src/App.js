import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from "./components/home.js";
import Writing from "./components/writing.js";

function App() {
  return (
    <Router>
      <>
        <br />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/writing"
            element={<Writing />}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;