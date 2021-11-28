import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages
import Login from './Login';

const LRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}


export default LRouter;