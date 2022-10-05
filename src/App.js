import React from "react";
import Characters from './Characters';
import Character from "./Character";
import Navbar from "./Navbar";
import {
    BrowserRouter as Router, 
    Routes, 
    Route
} from 'react-router-dom';
import Episodes from "./Episodes";
import Locations from "./Locations";
import Location from "./Location";
import './styles.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Characters />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/character/:id" element={<Character />} />
                <Route path="/episodes"  element={<Episodes />} />
                <Route path="/locations"  element={<Locations />} />
                <Route path="/location/:id"  element={<Location />} />
            </Routes>
        </Router>
    )
}

export default App;
