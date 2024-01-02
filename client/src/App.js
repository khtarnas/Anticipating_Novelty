import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Navbar from "./views/navbar_view.js";
import Home from "./views/home_view.js";
import Writing from "./views/writing/writing_view.js";
import AddWriting from "./views/writing/add_writing_view.js";
import Projects from './views/projects/projects_view.js';
import MapTravel from './views/map/map_travel_view.js';

function App() {
  return (
    <div>
      <Router>
        <>
          <Navbar /> {/* This must be inside the routes or "Link to" will not work */}
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            {/* WRITING sub routes: note that the element cannot be specified
              here or it will overrun children */}
            <Route path="/writing"> 
              <Route
                path=""
                element={<Writing />}
              />
              <Route
                path="add" //can NOT have "/" otherwise is absolute path
                element={<AddWriting />} 
              />
            </Route>

            {/* PROJECTS sub routes: */}
            <Route path="/projects"> 
              <Route
                path=""
                element={<Projects />}
              />
              {/* <Route
                path="add" //can NOT have "/" otherwise is absolute path
                element={<AddWriting />} 
              /> */}
            </Route>

            {/* MAP sub routes: */}
            <Route path="/map"> 
              <Route
                path=""
                element={<Navigate to='travel' />} />
              <Route
                path="travel"
                element={<MapTravel />}
              />
              {/* <Route
                path="add" //can NOT have "/" otherwise is absolute path
                element={<AddWriting />} 
              /> */}
            </Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;