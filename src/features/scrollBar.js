import { useState } from "react";
export default function ScrollBar(){
    const [width,setWidth] = useState(0)

    window.onscroll=()=>{
        const a = document.documentElement.scrollTop;
        const b = document.documentElement.scrollHeight;
        const c = document.documentElement.clientHeight;
      
        setWidth((a/(b-c))* 100)
        console.log(b)
    }
    return(
        <div style={{border:'1px solid black', width:width + '%', position:'sticky',top:'60px', zIndex:10}}></div>
    )
}