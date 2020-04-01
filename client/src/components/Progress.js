import React from "react";
import ReactDOM from "react-dom";

const Progress = props => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: "0",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5edd7"
      }}
    >
      <div
        className="modal valign-wrapper"
        style={{
          zIndex: "999",
          display: "flex",
          justifyContent: "center",
          opacity: "1",
          top: "10%",
          bottom: "10%"
        }}
      >
        <div className="modal-content center">
          <h3>Please wait ...</h3>
          <p>We are processing your payment.</p>
          <div className="progress">
            <div className="indeterminate" />
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#progress")
  );
};

export default Progress;
