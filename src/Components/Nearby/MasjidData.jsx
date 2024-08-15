export default function MasjidData({ name, jumah, fajr, zuhr, asr, maghrib, isha, rowIndex }) {
    const bgColor = rowIndex % 2 === 0 ? '#cbd5e0' : '#a0aec0';

    return (
        <div id={`data-row-${rowIndex}`} className="flex flex-row m-1" style={{ backgroundColor: bgColor }}>
            <div className="w-32 md:w-64 pl-2 text-left">{name}</div>
            <div className="w-16 md:w-32">{jumah}</div>
            <div className="w-16 md:w-32">{fajr}</div>
            <div className="w-16 md:w-32">{zuhr}</div>
            <div className="w-16 md:w-32">{asr}</div>
            <div className="w-16 md:w-32">{maghrib}</div>
            <div className="w-16 md:w-32">{isha}</div>
        </div>
    )
}
