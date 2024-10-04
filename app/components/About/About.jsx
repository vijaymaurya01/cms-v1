"use client";
import React from 'react';
import Image from "next/image";
import { useEffect, useState } from 'react';
import Team from '../Homepage/team';
import Faqs from '../FAQs/Faqs';
import Stats from '../Stats/Stats';
import Feature from '../Feature/Feature';

export default function AboutUs() {
    const [state, setState] = useState(false);

    useEffect(() => {
        const handleClick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="#">
                <Image
                    src="https://www.floatui.com/logo.svg"
                    width={120}
                    height={50}
                    alt="Company logo"
                />
            </a>
            <div className="md:hidden">
                <button className="menu-btn text-gray-500 hover:text-gray-800"
                    onClick={() => setState(!state)}
                >
                    {state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <div className='relative'>
            <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
            <div className='relative'>
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl'>
                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                                About <span className="text-indigo-600">Us</span>
                            </h1>
                            <p>
                                We are dedicated to providing the best solutions in the industry. Our mission is to help you achieve your goals through innovative services and expert guidance.
                            </p>
                            <p>
                                With years of experience, our team is committed to building long-lasting relationships with our clients and delivering exceptional value through quality service.
                            </p>
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Get to Know Us
                                </a>
                                <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div className='flex-1 hidden md:block'>
                            <Image src="https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="max-w-xl" alt='About Us Image' width={600} height={200} />
                        </div>
                    </div>
                </section>
                <section>
                <Feature/>

                </section>
                {/* Our Mission Section */}
                <section className="py-20">
                    <Stats/>
                </section>

                {/* Our Values Section */}
                <section className="py-20">
                    <div className="max-w-screen-xl mx-auto px-4 text-gray-600">
                        <h2 className="text-3xl font-bold text-gray-800">Our Values</h2>
                        <ul className="mt-4 list-disc list-inside">
                            <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
                            <li>Innovation: We continuously seek innovative solutions to meet our clients&apos; needs.</li>
                            <li>Customer Commitment: We develop relationships that make a positive difference in our customers&apos; lives.</li>
                        </ul>
                    </div>
                </section>

                {/* Meet the Team Section */}
                <section className="py-20 bg-gray-100">
                    <Team />
                </section>
                <section className="py-20 bg-gray-100">
                    <Faqs />
                </section>
            </div>
        </div>
    );
}
