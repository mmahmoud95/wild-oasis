import SelectCountry from '@/_components/SelectCountry';
import UpdateProfileForm from '@/_components/UpdateProfileForm';
import { auth } from '@/_lib/auth';
import { getGuest } from '@/_lib/data-service';

export const metadata = {
    title: 'Update Profile',
};

export default async function Page() {
    const session = await auth();
    const guest = await getGuest(session.user.email);
    // CHANGE


    return (
        <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-4">
                Update your guest profile
            </h2>

            <p className="text-lg mb-8 text-primary-200">
                Providing the following information will make your check-in
                process faster and smoother. See you soon!
            </p>

            <UpdateProfileForm guest={guest}>
                <SelectCountry
                    name="nationality"
                    id="nationality"
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                    defaultCountry={guest.nationalty}
                />
            </UpdateProfileForm>
        </div>
    );
}
