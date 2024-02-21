'use client'
import { useState } from 'react';

type SwitchProps = {
  label: string;
};

const Switch: React.FC<SwitchProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="flex items-center space-x-2">
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={isChecked}
            onChange={toggleSwitch}
          />
          <div className="w-14 h-8 bg-gray-200 rounded-full shadow-inner transition duration-300 ease-in-out" />
          <div className={`absolute left-1 top-1 w-6 h-6 ${isChecked ? 'bg-green-600' : 'bg-red-400'} rounded-full shadow-md transform duration-300 ease-in-out ${isChecked ? 'translate-x-6' : ''}`} />
        </div>
      </label>
    </div>
  );
};

export default Switch;
