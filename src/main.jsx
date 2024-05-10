import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

const AppLayout = lazy(() => import('./components/AppLayout'));
const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'));
const About = lazy(() => import('./components/About'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Body = lazy(() => import('./components/Body'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/menu/:resId" element={<RestaurantMenu />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);