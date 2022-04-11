import React from "react";
import { Route, Routes } from 'react-router-dom';

import { Signin } from '../pages/Signin';

const Auth: React.FC = () => (
    <Routes>
        <Route path="/" element={<Signin />} /> 
    </Routes>
)

export { Auth }