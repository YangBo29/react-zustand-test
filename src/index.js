/**
 * author : yangbo
 * date : 2024/07/05 17:59:12
 * fileName: index.js
 * description : 接入dva
 **/
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

if (module.hot) {
    module.hot.accept();
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
