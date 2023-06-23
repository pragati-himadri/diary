import React from 'react';
import ReactDom from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { PostsContextProvider } from './context/PostContext';
import { AuthContextProvider } from './context/AuthContext';
import './styles/index.scss';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AuthContextProvider>
        <PostsContextProvider>
        <Router>
        <App />
        </Router>
        </PostsContextProvider>
        </AuthContextProvider>
    </React.StrictMode>

);