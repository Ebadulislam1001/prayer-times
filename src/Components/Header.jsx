import { Routes, Route, Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <header className="w-full bg-[#718096] body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/"
                        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-10 h-10 p-2 bg-white rounded-full" viewBox="0 0 24 24">
                            <path d="M 12 2 L 12 22 M 12 2 A 7 6 0 0 0 12 15 M 12 2 A 7 6 1 1 1 12 15 M 8 22 L 16 22"></path>
                        </svg>
                        <span className="ml-3 text-xl">Pray on Time</span>
                    </Link>
                    <nav className="text-gray-100 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link className="mr-5 underline hover:text-blue-300 hover:cursor-pointer" to="/">Home</Link>
                        <Link className="mr-5 underline hover:text-blue-300 hover:cursor-pointer" to="/nearby">Nearby</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}