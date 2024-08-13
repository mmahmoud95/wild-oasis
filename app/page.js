import Image from 'next/image';
import Link from 'next/link';
import bg from '../public/bg.png';


export default function Home() {
    return (
        <main className="mt-24">
            <Image
                src={bg}
                fill
                alt="Mountains and forests with two cabins"
                placeholder="blur"
                className="object-top"
                quality={90}
            />
            <div className="z-10 relative text-center lg:mb-0 mt-36">
                <h1 className="text-3xl text-primary-50 mb-2 lg:mb-10 tracking-tight font-normal">
                    Welcome to paradise.
                </h1>
                <Link
                    href="/cabins"
                    className="bg-accent-500 py-2 lg:py-6 px-4  lg:px-8 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
                >
                    Explore luxury cabins
                </Link>
            </div>
        </main>
    );
}
