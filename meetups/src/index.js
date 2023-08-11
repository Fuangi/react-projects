import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import './index.css';
import { FavContextProvider } from './store/favorites-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <FavContextProvider>
   <BrowserRouter>
      <App /> 
   </BrowserRouter>
   </FavContextProvider>
   //jsx code and it's not understood by the browser. the createRoot... tells react where the element should be rendered in the dom/website with root id
);


// starting point, the code wtitten here is the first one to be rendered on the browser