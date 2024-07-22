import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import appStore from './utilitis/appStore';

const AppLayout = lazy(() => import('./components/AppLayout'));
const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'));
const About = lazy(() => import('./components/About'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Body = lazy(() => import('./components/Body'));
const Cart = lazy(() => import('./components/Cart'));

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Body />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/menu/:resId" element={<RestaurantMenu />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);