'use client';
import {
    useParams,
    usePathname,
    useRouter,
    useSearchParams,
} from 'next/navigation';

const Filter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const activeFilter = searchParams.get('capacity') ?? 'all';
    //for complex condition if have many many filters
    const handleFilter = (filter) => {
        const params = new URLSearchParams(searchParams);
        params.set('capacity', filter);
        if (filter === 'all') return router.replace(`${pathname}`);
        router.replace(`${pathname}?${params.toString()}`);
    };
    //simple way of doing it
    // const handleFilter = (filter) => {
    //     if (filter === 'all') return router.replace(`/cabins`);
    //     router.replace(`/cabins?capacity=${filter}`);
    // };
    return (
        <div className="border border-primary-800 flex">
            <Button
                filter="all"
                activeFilter={activeFilter}
                handleFilter={handleFilter}
            >
                All cabins
            </Button>
            <Button
                filter="small"
                activeFilter={activeFilter}
                handleFilter={handleFilter}
            >
                1 &mdash; 3 guests
            </Button>
            <Button
                filter="medium"
                activeFilter={activeFilter}
                handleFilter={handleFilter}
            >
                4 &mdash; 7 guests
            </Button>
            <Button
                filter="large"
                activeFilter={activeFilter}
                handleFilter={handleFilter}
            >
                8 &mdash; 12 guests
            </Button>
        </div>
    );
};

function Button({ children, activeFilter, filter, handleFilter }) {
    return (
        <button
            onClick={() => handleFilter(filter)}
            className={`px-5 py-2 hover:bg-primary-700 ${
                activeFilter === filter ? 'bg-primary-700' : ''
            }`}
        >
            {children}
        </button>
    );
}
export default Filter;
