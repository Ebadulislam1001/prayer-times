import { Routes, Route, Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="w-full bg-[#718096] font-mono">
                <div className="container md:px-5 md:py-8 p-4 mx-auto flex items-center justify-between md:flex-row flex-col">
                    <Link to="/" className="flex title-font font-medium items-center text-gray-900 md:mr-auto">
                        <svg fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" className="w-10 h-10 p-2 bg-white rounded-full" viewBox="0 0 24 24">
                            <path d="M 12 2 L 12 22 M 12 2 A 7 6 0 0 0 12 15 M 12 2 A 7 6 1 1 1 12 15 M 8 22 L 16 22"></path>
                        </svg>
                        <span className="ml-3 text-xl">Pray on Time</span>
                    </Link>

                    <p className="text-md text-white md:mx-4 md:py-2 my-1 hover:cursor-default">For feedback and suggestions, contact us at -</p>

                    <span className="inline-flex md:mt-0 mt-2 justify-center md:justify-start">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500">
                            <svg fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500">
                            <svg fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com"  target="_blank" rel="noopener noreferrer"className="ml-3 text-gray-500">
                            <svg fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </>
    )
}