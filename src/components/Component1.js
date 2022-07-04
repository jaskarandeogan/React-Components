import React, { useEffect } from "react";
import { useState, useRef } from "react";


const Component1 = ({start=0, end, timer= 50}) => {
    const [value, setValue] = useState(null);
    const ref = useRef(start);
  
    const initial = end / 200;
  
    const updateCounter = () => {
      if (ref.current < end) {
        const result = Math.ceil(ref.current + initial);
        if (result > end) return setValue(end);
        setValue(result);
        ref.current = result;
      }
      setTimeout(updateCounter, timer);
    };
  
    useEffect(() => {
      let isMounted = true;
      if (isMounted) {
        updateCounter();
      }
      return () => (isMounted = false);
    }, [end, start]);
  return (
    <div>
      <h1>The Animated Number</h1>
      <div>{value}+</div>
    </div>
  );
};

export default Component1;
