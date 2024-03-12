import React from "react";

type SVGResumeProps = {
    color: string
    className: string
    style?: React.CSSProperties
}

function SVGResume({ color, className, style }:SVGResumeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
    //   width="800"
    //   height="800"
      fill="none"
      className={className}
      style={style}
      viewBox="0 0 24 24"
    >
      <g>
        <path fill="" d="M0 0H24V24H0z"></path>
        <path
          fill={color}
          fillRule="evenodd"
          style={style}
          d="M9 11a1 1 0 100 2h6a1 1 0 100-2H9zm0 3a1 1 0 100 2h6a1 1 0 100-2H9zm3.482-12c.679-.001 1.281-.002 1.838.228.556.23.981.658 1.46 1.138.95.953 1.901 1.904 2.854 2.853.48.48.907.905 1.138 1.461.23.557.23 1.16.228 1.838-.004 2.516 0 5.032 0 7.548 0 .886 0 1.65-.082 2.262-.088.655-.287 1.284-.797 1.793-.51.51-1.138.709-1.793.797-.612.082-1.376.082-2.262.082H8.934c-.886 0-1.65 0-2.262-.082-.655-.088-1.284-.287-1.793-.797-.51-.51-.709-1.138-.797-1.793C4 18.716 4 17.952 4 17.066V7v-.066c0-.886 0-1.65.082-2.262.088-.655.287-1.284.797-1.793.51-.51 1.138-.709 1.793-.797C7.284 2 8.048 2 8.934 2c1.183 0 2.365.002 3.548 0z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}

export default SVGResume;