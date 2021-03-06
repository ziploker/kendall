// Menu.styled.js
import React from 'react'
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //background: ${({ theme }) => theme.primaryLight};
  background: white;
  opacity: .99;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 80;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 3;
  
  transform: ${({ open }) => open ? 'translateX(0px)' : 'translateX(500px)'};
  //transform: ${({ open }) => open ? 'scale(0,1)' : 'scale(1,1)'};
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    //width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2.5rem 0;
    font-weight: bold;
    letter-spacing: 0.1rem;
    //color: ${({ theme }) => theme.primaryDark};
    color: #465772;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      //font-size: 1.5rem;
      //text-align: center;
    }

    &:hover {
      //color: ${({ theme }) => theme.primaryHover};
      color: #F7C562
    }
  }
`;


export default props => <StyledMenu {...props} />;