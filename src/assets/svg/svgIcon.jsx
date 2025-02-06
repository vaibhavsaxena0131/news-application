import React, { useMemo } from "react";
import { memo } from "react";
import PropTypes from "prop-types";

export const ImportIcon = (name, folderName, outSide) => {
  if (outSide) {
    return React.lazy(
      () =>
        import(/* @vite-ignore */ `${outSide}/${folderName}/${name}.svg?react`)
    );
  }
  if (folderName) {
    return React.lazy(
      () => import(/* @vite-ignore */ `./${folderName}/${name}.svg?react`)
    );
  }
  return React.lazy(() => import(`./${name}.svg?react`));
};
const Icon = ({ folderName = "", name = "", outSide = false, ...rest }) => {
  const IconComponent = useMemo(() => {
    return ImportIcon(name, folderName, outSide);
  }, [name, folderName, outSide]);

  if (!IconComponent) {
    return null;
  }

  return (
    <React.Suspense fallback={null}>
      <IconComponent {...rest} />
    </React.Suspense>
  );
};

export default memo(Icon);

Icon.propTypes = {
  folderName: PropTypes.string,
  name: PropTypes.string,
  outSide: PropTypes.string,
};

export const FavoritedHeartIcon = ({ fill = false }) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.62 32.81C24.28 32.93 23.72 32.93 23.38 32.81C20.48 31.82 14 27.69 14 20.69C14 17.6 16.49 15.1 19.56 15.1C21.38 15.1 22.99 15.98 24 17.34C25.01 15.98 26.63 15.1 28.44 15.1C31.51 15.1 34 17.6 34 20.69C34 27.69 27.52 31.82 24.62 32.81Z"
        stroke="#4361EE"
        strokeWidth="1.5"
        fill={fill ? "#4361EE" : ""}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <rect
        x="0.75"
        y="0.75"
        width="46.5"
        height="46.5"
        rx="23.25"
        stroke="url(#paint0_linear_1790_2086)"
        strokeWidth="1.5"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear_1790_2086"
          x1="0"
          y1="24"
          x2="39.8113"
          y2="42.0555"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4361EE"></stop>
          <stop offset="1" stopColor="#7209B7"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

FavoritedHeartIcon.propTypes = {
  fill: PropTypes.bool,
};

export const MapIcon = ({ fill = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill={fill || "none"}
    >
      {fill ? (
        <path
          d="M10.6,2A5.6,5.6,0,0,0,5,7.6C5,11.8,10.6,18,10.6,18s5.6-6.2,5.6-10.4A5.6,5.6,0,0,0,10.6,2Zm0,7.6a2,2,0,1,1,2-2A2,2,0,0,1,10.6,9.6Z"
          transform="translate(-5 -2)"
        />
      ) : (
        <>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M7.99992 9.45346C9.14867 9.45346 10.0799 8.52221 10.0799 7.37346C10.0799 6.2247 9.14867 5.29346 7.99992 5.29346C6.85117 5.29346 5.91992 6.2247 5.91992 7.37346C5.91992 8.52221 6.85117 9.45346 7.99992 9.45346Z"
            stroke="#3E4048"
            strokeWidth="1.5"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M2.41379 6.16016C3.72712 0.386831 12.2805 0.393498 13.5871 6.16683C14.3538 9.5535 12.2471 12.4202 10.4005 14.1935C9.06046 15.4868 6.94046 15.4868 5.59379 14.1935C3.75379 12.4202 1.64712 9.54683 2.41379 6.16016Z"
            stroke="#3E4048"
            strokeWidth="1.5"
          />
        </>
      )}
    </svg>
  );
};

MapIcon.propTypes = {
  fill: PropTypes.string,
};
