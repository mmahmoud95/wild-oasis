import { auth } from '@/_lib/auth';
import Image from 'next/image';
import Link from 'next/link';

const Navigation = async () => {
    const session = await auth();
    console.log(session);
    return (
        <nav className="z-10 text-2xl mt-4 sm:mt-0">
            <ul className="flex gap-12 sm:gap-16 items-center">
                <li>
                    <Link
                        href="/cabins"
                        className="hover:text-accent-400 transition-colors"
                    >
                        Cabins
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="hover:text-accent-400 transition-colors"
                    >
                        About
                    </Link>
                </li>
                <li>
                    {session?.user?.image ? (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors flex items-center gap-2"
                        >
                            <img
                                className="rounded-full h-8"
                                src={session.user.image}
                                alt={session.user.name}
                                referrerPolicy="no-referrer"
                            />
                            <span>{session.user.name}</span>
                        </Link>
                    ) : (
                        <Link
                            href="/account"
                            className="hover:text-accent-400 transition-colors"
                        >
                            Guest area
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
};
export default Navigation;
