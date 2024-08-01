import { Inter } from 'next/font/google';
import '@/_styles/globals.css';

// const inter = Inter({ subsets: ['latin'] });
import { Josefin_Sans } from 'next/font/google';
import Header from '@/_components/Header';
import { ReservationProvider } from '@/_components/ReservationContext';
import { SessionProvider } from 'next-auth/react';
const josefin = Josefin_Sans({
    subsets: ['latin'],
    display: 'swap',
});
export const metadata = {
    // title: 'The wild Oasis',
    title: {
        template: '%s | The Wild Oasis',
        default: 'Welcome | The Wild Oasis',
    },
    description:
        'Welcome to The Wild Oasis, a place where you can relax and unwind.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* <body className={inter.className}> */}
            <body
                className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
            >
                <Header />
                <div className="flex-1 px-12 py-8 items-center flex flex-col w-full">
                    <main className="max-w-7xl w-full">
                        {/* <SessionProvider> */}
                        <ReservationProvider>{children}</ReservationProvider>
                        {/* </SessionProvider> */}
                    </main>
                </div>
            </body>
        </html>
    );
}
