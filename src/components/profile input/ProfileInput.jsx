import "./profileInput.css";
import { useState } from "react";
function ProfileInput(props) {
  const [UserNameVal, setUserName] = useState("");
  const [ageVal, setAge] = useState("");
  function userNameHandler(event) {
    setUserName(event.target.value);
  }
  function AgeHandler(event) {
    setAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    if (UserNameVal.trim().length === 0 || ageVal.trim().length === 0) {
      return;
    }
    if (ageVal === 0) {
      return;
    }
    props.onAdd(UserNameVal, ageVal);
  }
  return (
    <form className="form-cont" onSubmit={submitHandler}>
      <div className="form-control">
        <label className="text">Username</label>
        <input type="text" onChange={userNameHandler} />
      </div>
      <div className="form-control">
        <label className="text">Age (Years)</label>
        <input type="number" onChange={AgeHandler} />
      </div>
      <input type="submit" value="Add User" className="submit-btn" />
    </form>
  );
}
export default ProfileInput;
