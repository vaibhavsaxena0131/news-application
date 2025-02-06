const GradientButton = (props) => {
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
    <button
      onClick={onClick}
      className={`${className} px-6 py-3.5 rounded-full font-figtree border font-semibold text-[#ECF9FD] text-sm lg:text-base bg-[#2D419F] bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% transition-all hover:bg-gradient-to-tr border-none whitespace-nowrap`}
      id={id}
      type={type}
      {...rest}
    >
      {text}
      {children}
    </button>
  );
};

export default GradientButton;
