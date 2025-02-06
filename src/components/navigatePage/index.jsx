import React, { useId } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const NavigatePage = ({
  id = "",
  url = "",
  children,
  className = "",
  type = "navigate",
  dispatchFun = () => {},
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const keyId = useId();

  const handleClick = async () => {
    if (type === "dispatchAction") {
      await dispatch(dispatchFun);
    } else if (type === "actionWithNavigation") {
      await dispatch(dispatchFun);
      await navigate(url);
    } else if (url) {
      navigate(url, {
        key: keyId,
      });
    }
  };

  // Use Link for SEO and a11y when possible
  if (url && type === "navigate") {
    return (
      <Link to={url} id={id} className={`cursor-pointer ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <div
      onClick={handleClick}
      id={id}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default NavigatePage;
