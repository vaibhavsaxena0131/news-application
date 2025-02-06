const RightContent = ({ children }) => {
  return (
    <div className="w-full bg-gray-50 h-full relative">
      <div className=""></div>
      <div className="text-sm sticky top-0">{children}</div>
    </div>
  );
};

export default RightContent;
