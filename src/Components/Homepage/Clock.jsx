import { useState, useEffect } from 'react';

function getCurrentTime() {
    const now = new Date();
    const HH = String(now.getHours()).padStart(2, '0');
    const MM = String(now.getMinutes()).padStart(2, '0');
    return `${HH}:${MM}`;
}
export default function Clock() {
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getCurrentTime());
        }, 30000);

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);


    return (
        <>
            <div id="clock-block" className="m-4 monospace flex flex-col items-center justify-between text-center hover:cursor-default">
                <div id="clock" className="m-4 flex flex-row justify-center items-center w-[200px] h-[200px] border-4 border-dotted border-black rounded-full bg-white lg:w-[300px] lg:h-[300px] lg:border-6 lg:rounded-[151px]" >
                    <span className="text-center text-3xl">{time}</span>
                </div>
            </div>
        </>
    )
}
