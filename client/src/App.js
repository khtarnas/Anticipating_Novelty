import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Navbar from "./views/navbar_view.js";
import AllRoutes from './Routes.js';
import Footer from './views/footer_view.js';

function App() {
  return (
    <div>
      <Router>
        <>
          <Navbar /> {/* This must be inside the routes or "Link to" will not work */}
          <AllRoutes />
          <Footer />
        </>
      </Router>
    </div>
  );
}

export default App;