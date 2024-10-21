interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength = ({ password }: PasswordStrengthProps) => {
  const calculateStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  interface StrengthLabel {
    label: string;
    color: string;
    percentage: string;
  }

  const getStrengthLabel = (strength: number): StrengthLabel => {
    switch (strength) {
      case 1:
        return { label: "Weak", color: "bg-red-500", percentage: "25%" };
      case 2:
        return { label: "Moderate", color: "bg-orange-500", percentage: "50%" };
      case 3:
        return { label: "Good", color: "bg-yellow-500", percentage: "75%" };
      case 4:
        return { label: "Great", color: "bg-green-500", percentage: "100%" };
      default:
        return { label: "Weak", color: "bg-red-500", percentage: "0%" };
    }
  };

  const strength = calculateStrength(password);
  const { label, color, percentage } = getStrengthLabel(strength);

  return (
    <div className="flex items-center">
      <span className="mr-2">Password Strength:</span>
      <div className="flex items-center space-x-2">
        <span className={`text-sm font-medium ${color}`}>{label}</span>
        <div className="relative w-32 h-2 bg-gray-200 rounded">
          <div
            className={`h-full ${color} rounded transition-all duration-500`}
            style={{ width: percentage }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PasswordStrength;
