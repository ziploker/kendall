import React, {useEffect, useState, useRef} from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { gsap } from 'gsap'
import Topbar from "./Topbar"
import Hero from "./Hero"

import LowerSection from "./LowerSection";
import MidSection from "./MidSection";


import GlobalStyles from "./global"

import theme from "./theme"

import Menu from './menu'

//import useOnClickOutside from "./hooks"


function App(){
    
    const [open, setOpen] = useState(false);
    const ref = React.useRef(); 

    function handler(){
      setOpen(false);
      console.log("ran setopen in handler, open = " + open);
    }
    //useOnClickOutside(node, () => setOpen(false));
   
    useEffect(() => {

      console.log("UseEffect Start, open = " + open);
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {

          console.log("nada");
          return;
        }
        
        console.log("call handler");
        handler();
      };

      const handleResize = () => {
        console.log(window.innerWidth);
        if (window.innerWidth > 850){
          setOpen(false);
        }
      }

      window.addEventListener("resize", handleResize);
      document.addEventListener('mousedown', listener);
      
      return () => {
        document.removeEventListener('mousedown', listener);
        console.log("cleanup");
        console.log("cleanup done, open = " + open);
      };
    },
    [ref, handler],
    );
    
    
    return (
        <ThemeProvider theme={theme} >
            <>  
                
                    <GlobalStyles/>
                    <div className="tester" ref={ref}>
                    <Topbar open={open} setOpen={setOpen}  />
                    
                    <Menu open={open}  />
                    </div>
                    <Hero />
                    <MidSection/>
                    <LowerSection/>
                    
                
            </>
        </ThemeProvider>
        
    );
}


export default props => <App {...props} />;