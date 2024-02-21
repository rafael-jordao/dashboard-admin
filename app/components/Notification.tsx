'use client'
import { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';

const Notification: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const toggleNotification = () => {
    setShowNotification((prev) => !prev);
  };

  useEffect(() => {
    setNotificationCount(3);
  }, [])

  return (
    <div className="relative">
      <button
        onClick={toggleNotification}
        className="relative flex items-center justify-center w-10 h-10 bg-gray-200 rounded-lg text-gray-600 focus:outline-none focus:bg-gray-300 shadow-md"
      >
        <FaBell size={20} />
        {notificationCount > 0 && (
          <span className="absolute top-0 left-7 bg-red-400 text-white rounded-full text-[8px] px-2 py-1">
            {notificationCount}
          </span>
        )}
      </button>
      {showNotification && (
        <div className="absolute top-9 right-0 mt-2 mr-2 bg-white p-4 shadow-lg rounded-lg">
          <p className="text-gray-800">Você tem uma nova notificação!</p>
        </div>
      )}
    </div>
  );
};

export default Notification;
