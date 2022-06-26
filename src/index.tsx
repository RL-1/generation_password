import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Snackbar } from '@mui/material';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <SnackbarProvider maxSnack={1}>
        <App />
      </SnackbarProvider>
    </Provider>
  </BrowserRouter>
);

