"use client";
import { useState, useEffect } from "react";
export default function useTypingEffect(text, speed =150){
    const[displayText, setDisplayText]= useState("");

    useEffect(()=>{
        let index = 0;
        const interval = setInterval(()=>{
            setDisplayText(text.slice(0, index + 1));
            index++;
            if (index >= text.length){
                clearInterval (interval);
            }
        }, speed)
        return ()=> clearInterval(interval);
    }, [text, speed]);
    return(
        <div>
            {displayText}
        </div>
    )
}