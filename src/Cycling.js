import React from "react";

export default function Cycling() {
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
        src="https://asset.scott-sports.com/foi/foil-launch-pro_1600x750_landing-main-banner_2022_BIKE_SCOTT-Sports.jpg?signature=1c60fb30d8cda7d121caff882affcfe6a3448f0de0bb84e5dc52daa027d0be20"
      />
    </div>
  );
}
