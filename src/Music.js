import React from "react";

const Music = () => {
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
        src="https://i.discogs.com/Kz3a4rLnJSgJRLMu_mug-PecWrbud7368sQmVy9L2ls/rs:fit/g:sm/q:90/h:429/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTM0Mjc4/LTE2MTg4ODEyMjkt/NDI4MC5qcGVn.jpeg"
      />
    </div>
  );
};

export default Music;
