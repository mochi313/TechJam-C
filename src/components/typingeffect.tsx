"use client"
import ms from "./typingeffect.module.css"
import React, { useState, useEffect } from 'react';

export const Te = ({ children, speed = 100, delay = 0}: { children: string, speed?: number ,delay?:number }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const typeText = () => {
            setDisplayedText((prev) => prev + children.charAt(index)); // Add the character at the current index
            setIndex((prevIndex) => prevIndex + 1); // Update the index for the next character
        };

        const typingInterval = setInterval(() => {
        if (index < children.length) {
            typeText(); // Type the next character of the first line
        } else {
            clearInterval(typingInterval); // Clear the interval when all text is typed
            setToggle(true)
        }
        }, speed);

        return () => clearInterval(typingInterval); // Clean up interval on component unmount
    }, [children, index, speed, delay]);
    return <span className={`${!toggle && ms.typing} ${ms.sp}`}>{displayedText}</span>;
};

export const TeDelay = ({ children, speed = 100, delay = 0}: {
    children: string,
    speed?: number,
    delay?:number
}) => {
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        const delayTimeout = setTimeout(() => {
            setToggle(true)
            console.log("true")
        },delay)
        // return () => {
        //     clearTimeout(delayTimeout);
        // }
    },[delay])
    return (toggle && <Te children={children} speed={speed}/>)
}

export const TeDCal = ({texts, speed}:{
    texts:Array<string>,
    speed:number
}) => {
    return <>{
        texts.map((t,i) => {
            const delay = i !== 0 ? texts[i - 1].length * speed : 0;
            return <span key={i+delay}><TeDelay children={t} delay={delay} speed={speed} /><br /></span>
        })
    }</>
}