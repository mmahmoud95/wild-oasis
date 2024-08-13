import { Button } from '@/_components/Button';
import { updateBooking } from '@/_lib/actions';
import { getBooking, getCabin } from '@/_lib/data-service';

export default async function Page({ params: { reservationId } }) {
    // CHANGE


    const data = await getBooking(reservationId);
    const { maxCapacity } = await getCabin(data.cabinId);

    return (
        <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-7">
                Edit Reservation #{reservationId}
            </h2>

            <form
                action={updateBooking}
                className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
            >
                <div className="space-y-2">
                    <input name="id" defaultValue={reservationId} hidden />
                    <label htmlFor="numGuests">How many guests?</label>
                    <select
                        defaultValue={data.numGuests}
                        name="numGuests"
                        id="numGuests"
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                        required
                    >
                        <option value="" key="">
                            Select number of guests...
                        </option>
                        {Array.from(
                            { length: maxCapacity },
                            (_, i) => i + 1
                        ).map((x) => (
                            <option value={x} key={x}>
                                {x} {x === 1 ? 'guest' : 'guests'}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="observations">
                        Anything we should know about your stay?
                    </label>
                    <textarea
                        name="observations"
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    />
                </div>

                <div className="flex justify-end items-center gap-6">
                    <Button pendingLabel="Updating...">
                        Update reservation
                    </Button>
                </div>
            </form>
        </div>
    );
}
