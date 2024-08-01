'use client';
import React from 'react';
import ReservationCard from './ReservationCard';
import { useOptimistic } from 'react';
import { deleteBooking } from '@/_lib/actions';

const ReservationList = ({ bookings }) => {
    const [optimisticBookings, optimisticDelete] = useOptimistic(
        bookings,
        (curBooking, bookingId) => {
            return curBooking.filter((booking) => booking.id !== bookingId);
        }
    );
    const handleDelete = async (bookingId) => {
        optimisticDelete(bookingId);
        await deleteBooking(bookingId);
    };
    return (
        <ul className="space-y-6">
            {optimisticBookings?.map((booking) => (
                <ReservationCard
                    booking={booking}
                    key={booking.id}
                    onDelete={handleDelete}
                />
            ))}
        </ul>
    );
};

export default ReservationList;
