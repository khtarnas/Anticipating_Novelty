/**
 * The routes file: A separate file for all routes that is then exported and used
 *  in the Router in App.js. This is useful because in doing this I can call or
 *  import things that must be within a router and therefore cannot be done in
 *  the function call in App.js, but can here as this will be imported as a 
 *  component in the App.js function.
 * 
 *  For example useLocation is only possible because we have it
 *  "within a component".
 */

import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from "./views/home_view.js";
import Writing from "./views/writing/writing_view.js";
import AddWriting from "./views/writing/add_writing_view.js";
import Projects from './views/projects/projects_view.js';
import MapTravel from './views/map/map_travel_view.js';

function AllRoutes() {
    const location = useLocation();

  return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
  );
}

export default AllRoutes;