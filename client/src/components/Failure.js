import React from "react";
import ReactDOM from "react-dom";

const Failure = (props) =>
  ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: "0",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5edd7",
        zIndex: 10000,
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
          bottom: "10%",
        }}
      >
        <div className="modal-content center">
          <h3>Failure</h3>
          <p className="test-failure">{props.error}</p>
          <button onClick={props.clearError} className="btn">
            Close
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#failure")
  );

export default Failure;
