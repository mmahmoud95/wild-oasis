'use client';
import { deleteBooking } from '@/_lib/actions';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useTransition } from 'react';
import { useActiveModifiers } from 'react-day-picker';
import SpinnerMini from './SpinnerMini';

function DeleteReservation({ bookingId, onDelete }) {
    const [isPending, startTransition] = useTransition();

    const handleDelete = () => {
        if (confirm('Are you sure you want to delete this reservation'))
            startTransition(() => onDelete(bookingId));
    };

    return (
        <button
            className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            onClick={handleDelete}
        >
            {isPending ? (
                <span className="mx-auto">
                    <SpinnerMini />
                </span>
            ) : (
                <>
                    <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
                    <span className="mt-1">Delete</span>
                </>
            )}
        </button>
    );
}

export default DeleteReservation;
