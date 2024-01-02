import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Navbar from "./views/navbar_view.js";
import AllRoutes from './Routes.js';

function App() {
  return (
    <div>
      <Router>
        <>
          <Navbar /> {/* This must be inside the routes or "Link to" will not work */}
          <AllRoutes />
        </>
      </Router>
    </div>
  );
}

export default App;