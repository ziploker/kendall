
import React, { useEffect } from 'react';


const useOnClickOutside = (ref, handler) => {
  
    console.log("in")
    useEffect(() => {

    console.log("hhhhhhhh");
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    
    return () => {

        console.log("hhhhhhhddh");
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};


export default props => <useOnClickOutside {...props} />