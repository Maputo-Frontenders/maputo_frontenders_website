import * as React from "react";
const Line = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={33}
    height={1}
    viewBox="0 0 33 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line
      y1={0.5}
      x2={33}
      y2={0.5}
      stroke="#16F8B6"
      strokeOpacity={0.4}
      strokeDasharray="6 6"
    />
  </svg>
);
export default Line;
