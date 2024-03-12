import React from "react";

type SVGLinkedInProps = {
    color: string
    className: string
    style?:React.CSSProperties
}
function SVGLinkedIn({ color, className, style }:SVGLinkedInProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
    //   width="800"
    //   height="800"
      className={className}
      fill={color}
      version="1.1"
      viewBox="-143 145 512 512"
      xmlSpace="preserve"
      style={style}
    >
      <path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zM41.4 508.1H-8.5V348.4h49.9v159.7zM15.1 328.4h-.4c-18.1 0-29.8-12.2-29.8-27.7 0-15.8 12.1-27.7 30.5-27.7s29.7 11.9 30.1 27.7c.1 15.4-11.6 27.7-30.4 27.7zM241 508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4-14.9 0-23.2 10-27 19.6-1.4 3.4-1.2 8.2-1.2 13.1v86.3H71.8s.7-146.4 0-159.7h56.1v25.1c3.3-11 21.2-26.6 49.8-26.6 35.5 0 63.3 23 63.3 72.4v88.8z"></path>
    </svg>
  );
}

export default SVGLinkedIn;