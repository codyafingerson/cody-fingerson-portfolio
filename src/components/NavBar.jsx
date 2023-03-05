import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 relative z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between">
                <Link to="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Cody Fingerson</span>
                </Link>
                <button
                    className="inline-flex p-2 rounded-md sm:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    onClick={toggleMenu}
                >

                    <span className="sr-only">Open navigation menu</span>
                    {/* Icon when menu is closed. */}
                    <svg className={`block h-6 w-6 ${menuOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* Icon when menu is open. */}
                    <svg className={`block h-6 w-6 ${menuOpen ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${menuOpen ? '' : 'hidden'}`} id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/" className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="#" className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">Projects</Link>
                        </li>
                        <li>
                            <Link to="#" className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">Resume</Link>
                        </li>
                        <li>
                            <Link to="#" className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">Contact</Link>
                        </li>
                        <li>
                            <Link to="#" className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium sm:border-0 sm:bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:border-gray-700">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar