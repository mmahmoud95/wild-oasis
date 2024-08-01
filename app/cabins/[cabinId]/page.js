import Reservation from '@/_components/Reservation';
import Spinner from '@/_components/Spinner';
import Cabin from '@/_components/cabin';
import { getCabin, getCabins } from '@/_lib/data-service';
import { Suspense } from 'react';

export async function generateMetadata({ params: { cabinId } }) {
    const { name } = await getCabin(cabinId);
    return {
        title: `Cabin ${name}`,
    };
}

export async function generateStaticParams() {
    const cabins = await getCabins();
    const ids = cabins.map((cabin) => ({
        cabinId: String(cabin.id),
    }));
    return ids;
}

export default async function Page({ params: { cabinId } }) {
    console.log(process.env.NEXT_PUBLIC_API_DOMAIN);
    const cabin = await getCabin(cabinId);

    return (
        <div className="max-w-6xl mx-auto mt-8">
            <Cabin cabin={cabin} />
            <div>
                <h2 className="text-5xl font-semibold text-center mb-10 text-accent-600">
                    Reserve {cabin.name} today. Pay on arrival.
                </h2>
                <Suspense fallback={<Spinner />}>
                    <Reservation cabin={cabin} />
                </Suspense>
            </div>
        </div>
    );
}
