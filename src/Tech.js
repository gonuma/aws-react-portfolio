import React from "react";

export default function Tech() {
  return (
    <div
    className="pic-frame"
    style={{
      width: "50vh",
      overflow: "hidden",
      display: "flex",
    }}
  >
    <img
      style={{
        maxWidth: "inherit",
        maxHeight: "inherit",
        height: "inherit",
        width: "inherit",
        objectFit: "cover",
      }}
      src="https://s3.ap-northeast-1.amazonaws.com/www.gonuma.com/images/Raspberry_Pi_4_Model_B_-_Side.jpg"
    />
  </div>
  );
}
