
// import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Homes from './home';
import Aboutall from './aboutallfile/abouts-com';
import Maps from './datajsx/mapping';
//import Headmap from './head2';
import Sustainability from './Sunstainblity/sunst';
import Maps2 from './datajsx/mapping2';
import Maps3 from './datajsx/mapping3';
 
const router = createBrowserRouter([
  {
    path: "/Flipkart-Clone",
    element: <Homes />
  },
  {
    path: "/aboutallfile/abouts-com",
    element: <Aboutall />
  },
  {
    path: "/Sunstainblity/sunst",
    element: <Sustainability />
  },
  {
    path: "/datajsx/mapping",
    element:  <Maps />
  },
  {
    path: "/datajsx/mapping2",
    element: <Maps2/>
  },
  {
    path: "/datajsx/mapping3",
    element: <Maps3/>
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
