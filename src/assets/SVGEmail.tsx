import React from "react";

type SVGEmailProps = {
    color: string
    className: string
    style?: React.CSSProperties
}
function SVGEmail({ color, className, style }:SVGEmailProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
    //   width="800"
    //   height="800"
      viewBox="0 -2.5 20 20"
      className={className}
      style={style}
    >
      <g>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fill={color} transform="translate(-340 -922)" style={style}>
            <g transform="translate(56 160)">
              <path d="M294 774.474l-10-8.825V777h20v-11.351l-10 8.825zm.001-2.662L284 762.981V762h20v.981l-9.999 8.831z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SVGEmail;