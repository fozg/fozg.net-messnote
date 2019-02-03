import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import Main from './App'
import nomalize from 'normalize.css'
import {createGlobalStyle} from 'styled-components'

const GlobalStyled = createGlobalStyle`
  ${nomalize}
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ecefff;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  * {
    box-sizing: border-box;
  }

  [contenteditable=true]:empty:before {
    content: attr(placeholder);
    display: block; /* For Firefox */
    color: #ccc;
  }
`

function App() {
  return (
    <>
      <GlobalStyled />
      <Main />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
