import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';

import './index.css'

import { Toaster } from './components/ui/sonner';
import { store } from './redux/store';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </Suspense>
  </StrictMode>,
)
