const ArticleHeading = ({ heading, children, className = "" }) => {
  return (
    <h2
      className={`text-gray-900 leading-tight subpixel-antialiased ${className}`}
    >
      {heading}
      {children}
    </h2>
  );
};

export default ArticleHeading;
