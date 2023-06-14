import React from 'react'
import ReactDOM from 'react-dom/client'
import { AllRoutes } from "./routes/Routes";
import './index.css';
import Vlibras from '@djpfs/react-vlibras';
import { ProductsProvider } from './hooks/useProducts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Vlibras forceOnload={true} />
    <ProductsProvider>
      <AllRoutes />
    </ProductsProvider>
  </React.StrictMode>
)
