import React from 'react';
import CustomInput from '../../components/Input/CustomInput';
import { FaUserEdit, FaLock } from 'react-icons/fa';

const AccountSettingsForm = ({ user }) => {
  return (
    <div className="rounded-2xl  bg-white p-5 shadow-md">
      <div className="grid gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <FaUserEdit />
            </span>
            Edit Profile
          </div>
          <form className="space-y-4">
            <CustomInput
              label="Full Name"
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={user.name}
            />
            <CustomInput
              label="Username"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={user.username}
              disabled={true}
            />
            <CustomInput
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={user.email}
              disabled={true}
            />
            <button
              type="submit"
              className="w-full rounded-md py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              Save Changes
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
              <FaLock />
            </span>
            Change Password
          </div>
          <form className="space-y-4">
            <CustomInput
              label="Old Password"
              id="oldPassword"
              type="password"
              placeholder="Enter your old password"
            />
            <CustomInput
              label="New Password"
              id="newPassword"
              type="password"
              placeholder="Enter your new password"
            />
            <CustomInput
              label="Confirm New Password"
              id="confirmNewPassword"
              type="password"
              placeholder="Confirm your new password"
            />
            <button
              type="submit"
              className="w-full rounded-md py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsForm;
