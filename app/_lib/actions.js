'use server';

import { formatDate } from 'date-fns';
import { auth, signIn, signOut } from './auth';
import {
    createBookingSupabase,
    deleteBookingSupabase,
    getBooking,
    getBookings,
    updateBookingSupabase,
    updateGuestSupabase,
} from './data-service';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signInAction() {
    await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
    await signOut({ redirectTo: '/' });
}

export async function updateGuest(FormData) {
    const session = await auth();
    if (!session) throw new Error('You must be logged in');

    const nationalID = FormData.get('nationalID');
    const [nationality, countryFlag] = FormData.get('nationality').split('%');
    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
        throw new Error('Please provide a valid nationalID');
    const updateData = { nationality, countryFlag, nationalID };
    await updateGuestSupabase(session.user.guestId, updateData);
}

export async function deleteBooking(bookingId) {
    const session = await auth();
    if (!session) throw new Error('You must be logged in');

    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingsIds = guestBookings.map((booking) => booking.id);
    if (!guestBookingsIds.includes(bookingId)) {
        throw new Error('You are not allowed to deleteBooking');
    }

    await deleteBookingSupabase(bookingId);
}

export async function updateBooking(FormData) {
    const id = FormData.get('id');
    const numGuests = FormData.get('numGuests');
    const observations = FormData.get('observations');
    const updateData = { numGuests, observations };
    await updateBookingSupabase(id, updateData);
}

export async function createBooking(bookingData, formData) {
    console.log(bookingData, FormData);
    const session = await auth();
    console.log(session);
    if (!session) throw new Error('You must be logged in');

    const newBooking = {
        ...bookingData,
        guestId: session.user.guestId,
        numGuests: +formData.get('numGuests'),
        observations: formData.get('observations').slice(0, 1000),
        extraPrice: 0,
        totalPrice: bookingData.cabinPrice,
        isPaid: false,
        hasBreakfast: false,
        status: 'unconfirmed',
    };

    await createBookingSupabase(newBooking);
    revalidatePath(`/cabins${newBooking.cabinId}`);
    redirect('/cabins/thankyou');
}
