import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import {} from 'react-icons/fa';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="z-10">
            <div className="px-8 sm:px-32 md:px-32 flex border-t justify-between items-start border-primary-900 py-4">
                <div>
                    <Logo />
                    <div className="flex justify-center pt-4 text-3xl text-gray-300">
                        <Link
                            className="pr-5"
                            href="https://www.facebook.com/mustafamahmoudza/"
                        >
                            <FaFacebook />
                        </Link>{' '}
                        <Link href="https://x.com/mustafa_m_za">
                            <FaTwitter />
                        </Link>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl pb-2">Contact Us</h2>
                    <div className="text-gray-400">
                        <p>Email: info@wild-oasis.com</p>
                        <p>Phone: +1 123-456-7890</p>
                        <p>Address: 123 Main St, Cairo, Egypt</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl pb-2">Account</h2>
                    <div className="flex flex-col text-gray-400">
                        <Link href="/account/profile">Profile</Link>{' '}
                        <Link href="/account/reservations">
                            My Reservations
                        </Link>
                    </div>
                </div>{' '}
            </div>{' '}
            <div className="text-gray-400 text-lg pt-4 text-center pb-4 bg-gray-800">
                &copy; 2024 Wild Oasis. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
