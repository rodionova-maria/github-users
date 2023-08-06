import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

  body {
    background: #fff;
    color: #000;
    padding: 30px;
    font-family: Arial, sans-serif;
    font-size: 16px;
  }

  a {
    color: #474bff;
  }

  button {
    font-size: 16px;
    background: #FBAFAF;
    color: #000;
    height:20px;
    border: 0;
    padding: 5px 10px;
    height: 30px;
    border-radius: 5px
  }

  input {
    color: #000;
    height: 30px;
    padding: 5px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #000;
    min-width: 180px;
  }
`

export default GlobalStyles
