import React from 'react';

const PasswordStrengthBar = ({ rules, strengthLabel, strengthColor, strengthWidth, showRules = true }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-gray-600">
        <span>Password strength</span>
        <span className="font-semibold text-gray-800">{strengthLabel}</span>
      </div>
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className={`h-2 rounded-full transition-all ${strengthColor}`}
          style={{ width: strengthWidth }}
        />
      </div>
      {showRules && rules && (
        <div className="text-xs text-gray-600">
          <span className={rules.length ? 'text-green-600' : 'text-gray-500'}>8+ characters</span>
          {' · '}
          <span className={rules.uppercase ? 'text-green-600' : 'text-gray-500'}>1 uppercase</span>
          {' · '}
          <span className={rules.number ? 'text-green-600' : 'text-gray-500'}>number</span>
          {' · '}
          <span className={rules.special ? 'text-green-600' : 'text-gray-500'}>special character</span>
        </div>
      )}
    </div>
  );
};

export default PasswordStrengthBar;
