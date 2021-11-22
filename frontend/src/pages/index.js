import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages
import Homepage from './HomePage';
import EditorPage from './EditPage';
import Login from './Login';

const RouterSetup = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="edit" element={<EditorPage />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </Router>
    );
}


export default RouterSetup;