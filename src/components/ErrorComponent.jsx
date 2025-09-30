import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-lg bg-red-500 text-white p-4 rounded-lg shadow-lg flex items-center">
      <span className="mr-2">⚠️</span>
      {message}
    </div>
  );
};

export default ErrorComponent;
