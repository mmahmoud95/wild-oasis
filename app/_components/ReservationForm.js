'use client';
import { useSession } from 'next-auth/react';

import { useReservation } from './ReservationContext';
import { createBooking } from '@/_lib/actions';
import { differenceInDays } from 'date-fns';
import { Button } from './Button';

function ReservationForm({ cabin, user }) {
    // CHANGE
    const { maxCapacity, regularPrice, discount, id } = cabin;
    const { range, setRange, resetRange } = useReservation();

    const startDate = range?.from;
    const endDate = range?.to;

    const numNights = differenceInDays(endDate, startDate);
    const cabinPrice = numNights * (regularPrice - discount);
    // const session = useSession();
    // console.log(session);

    const bookingData = {
        startDate,
        endDate,
        cabinId: id,
        cabinPrice,
        numNights,
    };

    const createBookingData = createBooking.bind(null, bookingData);
    return (
        <div>
            <div className="bg-primary-800 text-primary-300 px-16 py-2 flex justify-between items-center">
                <p>Logged in as</p>

                <div className="flex gap-4 items-center">
                    <img
                        // Important to display google profile images
                        referrerPolicy="no-referrer"
                        className="h-8 rounded-full"
                        src={user.image}
                        alt={user.name}
                    />
                    <p>{user.name}</p>
                </div>
            </div>

            <form
                action={(formData) => {
                    createBookingData(formData);
                    resetRange();
                }}
                className="bg-primary-900 py-10 px-16 text-lg flex gap-14 md:gap-5 flex-col"
            >
                <input
                    name="numNights"
                    type="number"
                    value={numNights}
                    hidden
                />{' '}
                <div className="space-y-2">
                    <label htmlFor="numGuests">How many guests?</label>
                    <select
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
                        id="observations"
                        className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                        placeholder="Any pets, allergies, special requirements, etc.?"
                    />
                </div>
                <div className="flex justify-end items-center gap-6">
                    {!startDate && !endDate ? (
                        <p className="text-primary-300 text-base">
                            Start by selecting dates
                        </p>
                    ) : (
                        <Button pendingLabel="Reserving...">Reserve now</Button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default ReservationForm;
