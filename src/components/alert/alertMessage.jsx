const Alert = ({ message, type, show }) => {
  const typeStyles = {
    error: "text-red-700 border-red-700 bg-red-50",
    warning: "text-yellow-700 border-yellow-700 bg-yellow-50",
    success: "text-green-700 border-green-700 bg-green-50",
  };

  if (!show) return null;
  return (
    <p
      className={`error-container font-medium text-md border rounded-md p-3 ${typeStyles[type]}`}
    >
      {message}
    </p>
  );
};

export default Alert;
