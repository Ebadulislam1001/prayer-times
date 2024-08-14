import { useState, useEffect } from 'react';

function getCurrentTime() {
    const now = new Date();
    const HH = String(now.getHours()).padStart(2, '0');
    const MM = String(now.getMinutes()).padStart(2, '0');
    return `${HH}:${MM}`;
}
export default function DailyTimesTable() {
    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getCurrentTime());
        }, 30000);

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);


    return (
        <>
            <div id="time-table" className="monospace my-4 mid:my-8 flex flex-col text-center md:text-2xl text-l border-2 border-gray-800 rounded-xl hover:cursor-default">
                <div className="flex flex-row m-1 my-4" id="fajr">
                    <div className="w-32 md:w-64">Current</div>
                    <div className="w-32 md:w-64">{time}</div>
                </div><div className="flex flex-row m-1 bg-gray-300" id="fajr">
                    <div className="w-32 md:w-64">Fajr</div>
                    <div className="w-32 md:w-64">00:00</div>
                </div>
                <div className="flex flex-row m-1 bg-gray-400" id="sunrise">
                    <div className="w-32 md:w-64">Sunrise</div>
                    <div className="w-32 md:w-64">00:00</div>
                </div>
                <div className="flex flex-row m-1 bg-gray-300" id="zuhr">
                    <div className="w-32 md:w-64">Zuhr</div>
                    <div className="w-32 md:w-64">00:00</div>
                </div>
                {/* <div className="flex flex-row m-1 bg-gray-400" id="asr-shafii">
                    <div className="w-32 md:w-64">Asr (Shafii)</div>
                    <div className="w-32 md:w-64">00:00</div>
                </div>  */}
                <div className="flex flex-row m-1 bg-gray-400" id="asr-hanafi">
                    <div className="w-32 md:w-64">Asr (Hanafi)</div>
                    <div className="w-32 md:w-64">00:00</div>
                </div>
                <div className="flex flex-row m-1 bg-gray-300" id="maghrib">
                    <div className="w-32 md:w-64">Maghrib</div>
                    <div className="w-32 md:w-64">00:00</div>
                </div>
                {/* <div className="flex flex-row m-1 bg-gray-400" id="isha-shafii">
                    <div className="w-32 md:w-64">Isha (Shafii)</div>
                    <div className="w-32 md:w-64">00:00</div>
                </div>  */}
                <div className="flex flex-row m-1 bg-gray-400" id="isha-hanafi">
                    <div className="w-32 md:w-64">Isha (Hanafi)</div>
                    <div className="w-32 md:w-64">00:00</div>
                </div>
            </div>
        </>
    )
}
