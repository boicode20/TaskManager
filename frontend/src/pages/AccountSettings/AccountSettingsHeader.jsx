import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const AccountSettingsHeader = ({ user }) => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-500">
          <FaUserCircle className="h-8 w-8" />
        </div>
        <div className="min-w-0">
          <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">{user.name}</h2>
          <p className="truncate text-sm text-gray-500">{user.email}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-400">{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsHeader;
