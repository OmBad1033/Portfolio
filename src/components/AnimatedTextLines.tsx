import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

type Props = {
    text: string;
    classname?: string;
}

gsap.registerPlugin(ScrollTrigger);

function AnimatedTextLines({text, classname}: Props) {
    const containerRef = useRef(null);
    const lineRefs = useRef([]);
    const lines = text.split('\n').filter(line => line.trim() !== '');

    useGSAP(()=>{
        if(lineRefs.current.length>0)
        {
            gsap.from(lineRefs.current,{
                y:100,
                opacity:0,
                duration:1,
                stagger:0.3,
                ease:'black.out',
                scrollTrigger:{
                    trigger: containerRef.current
                }
            })
        }
    })
  return (
    <div ref={containerRef} className={classname}>
        {lines.map((line, index) => (
            <span 
                key={index} 
                ref={(el)=>(lineRefs.current[index] = el)}
                className="block leading-relaxed tracking-wide text-pretty">
                {line}
            </span>
        ))}
    </div>
  )
}

export default AnimatedTextLines