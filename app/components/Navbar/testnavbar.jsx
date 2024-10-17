"use client"; // Ensure this is a client component

import Image from 'next/image';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
// Import useRouter and usePathname
import { useAuth } from '../../context/AuthContext'; // Adjust this import based on your context file location
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

export default function Testnavbar() {
    const { currentUser, logout } = useAuth(); // Access current user and logout function
    const router = useRouter(); // Initialize useRouter from next/navigation
    const pathname = usePathname(); // Get the current path

    const handleLogout = async () => {
        try {
            await logout(); // Call logout function from auth context

            // Redirect to Signup if user is on Write or Profile page
            if (pathname === '/Write' || pathname === '/Profile') {
                router.push('/Signup');
            }
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    const handleWriteClick = () => {
        if (currentUser) {
            // If the user is logged in, navigate to the Write page
            router.push('/Write');
        } else {
            // If the user is not logged in, redirect to the Signup page
            router.push('/Signup');
        }
    };

    return (
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="/Homepage" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NextGenInfo</span>
                </a>
                <div className="flex items-center lg:order-2">
                    {currentUser ? (
                        <div className="relative">
                            
                            {/* Optional: Add a dropdown or click functionality here */}
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button
                                        variant="bordered"
                                        className="flex items-center"
                                    >
                                        <ProfilePicture email={currentUser.email} />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="User Menu">
                                    <DropdownItem key="profile">
                                        <a href="/Profile" className="block text-gray-800">Profile</a>
                                    </DropdownItem>
                                    <DropdownItem key="logout" onClick={handleLogout} className="text-danger" color="danger">
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>

                    ) : (
                        <>
                            <a href="/Login" className="text-gray-800 dark:text-white hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                            <a href="/Signup" className="text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
                        </>
                    )}
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="/Homepage" className="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/BlogMainpage" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blogs</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                        </li>
                        <li>
                            <button onClick={handleWriteClick} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Write</button>
                        </li>
                        <li>
                            <a href="/AboutUs" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
