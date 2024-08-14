import Clock from "./Clock"
import DailyTimesTable from "./DailyTimesTable"

export default function Homepage() {
    return (
        <>
            <div className='w-full md:my-8 flex lg:flex-row flex-col justify-evenly items-center font-light'>
                <Clock />
                <DailyTimesTable />
            </div>
        </>
    )
}