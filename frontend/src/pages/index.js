import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages
import Homepage from './HomePage';
import EditorPage from './EditPage';
import Login from './Login';
import About from './About';

const RouterSetup = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="edit" element={<EditorPage />} />
                <Route path="login" element={<Login />} />
                <Route path="about" element={<About />} />
            </Routes>
        </Router>
    );
}


export default RouterSetup;