export const usePasswordStrength = (password = '') => {
  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password)
  };

  const strengthScore = Object.values(rules).filter(Boolean).length;
  const strengthLabel = strengthScore <= 1 ? 'Weak' : strengthScore <= 3 ? 'Medium' : 'Strong';
  const strengthColor = strengthScore <= 1 ? 'bg-red-500' : strengthScore <= 3 ? 'bg-yellow-500' : 'bg-green-600';
  const strengthWidth = strengthScore <= 1 ? '33%' : strengthScore <= 3 ? '66%' : '100%';
  const isValid = strengthScore === 4;

  return {
    rules,
    strengthScore,
    strengthLabel,
    strengthColor,
    strengthWidth,
    isValid
  };
};
