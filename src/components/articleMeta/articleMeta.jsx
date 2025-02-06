import TimeAgo from "../timeAgo";

const ArticleMeta = ({
  date,
  category,
  timerClassName = "",
  categoryClassName = "",
  dividerClass = "",
}) => {
  return (
    <div className="flex items-center gap-1">
      <p className={`text-sm text-gray-600 ${timerClassName}`}>
        <TimeAgo date={date} />
      </p>
      {category && (
        <>
          <p className={`text-gray-600 text-sm ${dividerClass}`}>|</p>
          <p
            className={`font-medium text-sm text-[#C70000] ${categoryClassName}`}
          >
            {category}
          </p>
        </>
      )}
    </div>
  );
};

export default ArticleMeta;
