import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './pages/Portfolio.jsx'   // הנתיב לפי איפה ששמת את הקובץ
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
)
