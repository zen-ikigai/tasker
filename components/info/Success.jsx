import React from 'react';

const Success = ({ title, message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-900 bg-opacity-50 absolute inset-0"></div>
      <div className="bg-green-100 p-6 rounded-lg shadow-lg relative">
        <h2 className="text-green-700 font-semibold">{title}</h2>
        <p className="text-green-600">{message}</p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md" onClick={onClose}>OK</button>
      </div>
    </div>
  );
}

export default Success;
