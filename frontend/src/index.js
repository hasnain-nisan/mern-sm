import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import postReducer from './reducers/posts';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { devToolsEnhancer } from '@redux-devtools/extension';

const store = configureStore(
  {
    reducer: {
      postData: postReducer,
    },
  },
  devToolsEnhancer()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  </React.StrictMode>
);
