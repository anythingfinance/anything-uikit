import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="-2 -2 20 20" {...props}>
      <circle cx="8" cy="8" r="8" fill="url(#paint0_linear)" />
    <path 
        d="M 2.246 14.766 L 6.484 8.906 L 0 6.836 L 0.625 4.805 L 7.109 7.207 L 7.031 0 L 9.063 0 L 8.906 7.266 L 15.234 4.785 L 15.879 6.816 L 9.375 9.043 L 13.73 14.766 L 12.07 16.016 L 7.891 10.078 L 3.906 15.977 L 2.246 14.766 Z"
        fill="#303030"
        stroke="#303030"
        strokeWidth="3"
    />
  </Svg>
  );
};

export default Icon;
