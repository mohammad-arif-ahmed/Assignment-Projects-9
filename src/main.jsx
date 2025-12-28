
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
    duration: 800, // Animation duration
    once: true,    // Animation only happens once
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster 
        position="top-right" 
        reverseOrder={false}
    />{/* Global Toast Container */}
  </React.StrictMode>,
);