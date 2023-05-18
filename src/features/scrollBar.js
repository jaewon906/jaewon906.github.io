import { useEffect, useState } from "react";
export default function ScrollBar({mode}) {
    const [width, setWidth] = useState(0);
    const styled = {
        height:'0px',
        width: width + '%',
        position: 'sticky',
        top: '60px',
        zIndex: 10,
        transition: 'background-color 0.3s ease',
        border: `1px solid ${mode.mode ? 'orange':'black'}`,
    }
    useEffect(() => {

        window.onscroll = () => {
            const a = document.documentElement.scrollTop;
            const b = document.documentElement.scrollHeight;
            const c = document.documentElement.clientHeight;
            setWidth(((a / (b - c)) * 100))

        }

    }, [])

    return (
        <div style={styled}></div>
    )
}