import React, { useContext } from 'react';
import AccountSettingsHeader from './AccountSettingsHeader';
import AccountSettingsForm from './AccountSettingsForm';
import { UserContext } from '../../provider/UserProvider';

const AccountSettings = () => {
    const { user,setUser } = useContext(UserContext);

    return (
        <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl space-y-6 pb-20">
                <AccountSettingsHeader user={user} />
                <AccountSettingsForm user={user} setUser={setUser} />
            </div>
        </div>
    );
};

export default AccountSettings;
