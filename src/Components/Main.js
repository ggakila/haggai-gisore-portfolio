import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import useMousePosition from '../useMousePosition';
// import arrowImage from '../images/arrow.svg';


export default function Main() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 300 : 30;

  return (
    <main className= 'main'>
      <motion.div className= 'mask' animate={{
        WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration:0.5}}>
        <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
        "Embracing Pan-Africanism with Code: A Nairobi-based Software Developer on a Quest for Greatness, Empowering Change through Technology."        </p>
      </motion.div>

      <motion.div className= 'body' >
        <motion.h1 >HAGGAI GISORE STUDIOS</motion.h1>
      </motion.div>
    </main>
  )
}
