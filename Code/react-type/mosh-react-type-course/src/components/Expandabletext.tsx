import React from 'react'
import { useState } from 'react';

interface Props {
    children: string;
    maxChars?: number;
}

const Expandabletext = ({children, maxChars = 100}: Props) => {
    const [isExpanded, setExpanded] = useState(false);

   if (children.length <= maxChars) return <div> {children} </div>
   
   const text = isExpanded ? children : children.substring(0, maxChars);

   return <div> {text}...<button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button> </div>

}

export default Expandabletext
