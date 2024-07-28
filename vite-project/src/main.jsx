import React from 'react'
import ReactDOM from 'react-dom/client'
import Button from './Button.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>REACT HOMEWORK</h1>
    <h2>Input Component</h2>
    <Button />
    <Button text='로그인하기'/>
    <Button text='가입하기'/>

  </React.StrictMode>,
)
