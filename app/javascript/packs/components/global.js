import React, {useEffect, useState} from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
  }
  
  *, *::after, *::before {
    box-sizing: border-box;
  }
  

  #App{

    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 13%;
    
    height: 80px;
    border-bottom: 1px solid gray;
  }

  
  /*body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
  */
`

export default props => <GlobalStyles {...props} />;