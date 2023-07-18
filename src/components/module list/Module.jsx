import "./module.css";
function Module(props) {
  function handleClick() {
    props.click();
  }
  return (
    <div className={props.className}>
      <div className="module-cont">
        <header className="header-style">Invalid Input</header>
        <div className="module-message">
          <p>Invalid Input</p>
          <div className="btn-cont">
            <button className="btn" onClick={handleClick}>
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Module;
