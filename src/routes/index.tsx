import React from 'react';
import { AppRoutes } from './app.routes';
import { Auth } from './auth.routes';
import { BrowserRouter } from "react-router-dom";
import { useAuth } from '../components/hooks/auth';

const Routes:React.FC = () => {
    const { logged } = useAuth();
    return (        
        <BrowserRouter>
            { logged ? <AppRoutes /> : <Auth />}
        </BrowserRouter>
    );
}

export { Routes } 