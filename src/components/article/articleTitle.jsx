const ArticleTitle = ({ title, children, className = "" }) => {
  return (
    <p
      className={`text-md font-normal text-gray-500 subpixel-antialiased leading-tight ${className}`}
    >
      {title}
      {children}
    </p>
  );
};

export default ArticleTitle;
