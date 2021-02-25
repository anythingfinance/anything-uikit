import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 168 168" {...props}>
      <svg width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 23.584 155.039 L 68.086 93.516 L 0 71.777 L 6.563 50.449 L 74.648 75.674 L 73.828 0 L 95.156 0 L 93.516 76.289 L 159.961 50.244 L 166.729 71.572 L 98.438 94.951 L 144.17 155.039 L 126.738 168.164 L 82.852 105.82 L 41.016 167.754 L 23.584 155.039 Z"
          vectorEffect="non-scaling-stroke"
          fill="#303030"
          stroke="#303030"
          strokeWidth="3"
        />
      </svg>
    </Svg>
  );
};

export default Icon;
