import React from "react";

function Current(props) {
  return (
    <div className="current">
      <h2 className="current__subject">{props.current}</h2>
    </div>
  );
}

export default Current;
