import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="lds">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
