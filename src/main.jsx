// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast'; // Toaster ইমপোর্ট করুন

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* AuthProvider দিয়ে মুড়ে দিন */}
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster /> {/* Global Toast Container */}
  </React.StrictMode>,
);