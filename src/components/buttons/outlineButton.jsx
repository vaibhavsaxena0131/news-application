const OutlineButton = (props) => {
  let {
    className = "",
    onClick = () => {},
    children,
    text,
    id = "",
    type = "button",
    ...rest
  } = props;
  return (
    <div className="work_btn rounded-full bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% p-0.5">
      <button
        onClick={onClick}
        className={`${className} px-6 py-3 font-figtree font-semibold text-[#17181C] text-sm lg:text-base bg-[#FFFFFF] rounded-full transition-all duration-200 ease-linear hover:bg-[#2D419F] hover:text-[#ECEFFD] whitespace-nowrap`}
        id={id}
        type={type}
        {...rest}
      >
        {text}
        {children}
      </button>
    </div>
  );
};

export default OutlineButton;
