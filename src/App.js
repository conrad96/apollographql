import React from "react";
import Characters from './Characters';
import Navbar from "./Navbar";
import {
    BrowserRouter as Router, 
    Routes, 
    Route
} from 'react-router-dom';
import Episodes from "./Episodes";
import Locations from "./Locations";
import './styles.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Characters />} />
                <Route path="/characters" exact element={<Characters />} />
                <Route path="/episodes" exact element={<Episodes />} />
                <Route path="/locations" exact element={<Locations />} />
            </Routes>
        </Router>
    )
}

export default App;
