import "./profileInput.css";
import { useRef } from "react";
function ProfileInput(props) {
  // const [UserNameVal, setUserName] = useState("");
  // const [ageVal, setAge] = useState("");
  //refs allow us to access other dom elements
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    console.log(nameInputRef);
    props.onAdd(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }
  return (
    <form className="form-cont" onSubmit={submitHandler}>
      <div className="form-control">
        <label className="text">Username</label>
        <input type="text" ref={nameInputRef} />
      </div>
      <div className="form-control">
        <label className="text">Age (Years)</label>
        <input type="number" ref={ageInputRef} />
      </div>
      <input type="submit" value="Add User" className="submit-btn" />
    </form>
  );
}
export default ProfileInput;
