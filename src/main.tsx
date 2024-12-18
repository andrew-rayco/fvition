import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.tsx';
import './css/normalize.css';
import './css/skeleton.css';
import './css/main.sass';
import QueryClientProvider from './components/QueryClientProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
