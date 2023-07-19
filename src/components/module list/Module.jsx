import React from "react";
import ReactDOM from "react-dom";
import "./module.css";

function Module(props) {
  const Backdrop = (props) => {
    return (
      <div className={props.className}>
        <div className="module-cont">
          <header className="header-style">{props.title}</header>
          <div className="module-message">
            <p>{props.message}</p>
            <div className="btn-cont">
              <button className="btn" onClick={handleClick}>
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  function handleClick() {
    props.click();
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          className={props.className}
          title={props.error.title}
          message={props.error.message}
        />,
        document.getElementById("backdrop")
      )}
    </React.Fragment>
  );
}
export default Module;
