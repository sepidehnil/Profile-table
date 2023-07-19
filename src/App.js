import ProfileInput from "./components/profile input/ProfileInput";
import ProfileList from "./components/profiles list/ProfileList";
import Module from "./components/module list/Module";
import Wrapper from "./components/Helpers/Wrapper";
import React, { useState } from "react";

function App() {
  const [addInfo, setInfo] = useState("");
  const [valid, setValid] = useState(true);
  const [error, setError] = useState("");

  function addInputs(enteredName, enteredAge) {
    if (enteredAge < 0) {
      setValid(false);
      setError({ title: "Invalid age", message: "The age is not Valid" });
      return;
    }
    if (enteredAge <= 0 && enteredName.trim().length === 0) {
      setValid(false);
      setError({
        title: "Empty inputs",
        message: "Please enter valid inputs(non empty)",
      });
      return;
    }
    setInfo((prevInputs) => {
      const update = [...prevInputs];
      update.unshift({
        userName: enteredName,
        age: enteredAge,
        id: crypto.randomUUID().toString(),
      });
      return update;
    });
  }

  function deleteItems(infoId) {
    setInfo((prevInputs) => {
      const updated = prevInputs.filter((info) => info.id !== infoId);
      return updated;
    });
  }

  let content = (
    <p style={{ textAlign: "center" }}>No information found. Maybe add one?</p>
  );
  if (addInfo.length > 0) {
    content = addInfo.map((data) => (
      <ProfileList
        key={data.id}
        id={data.id}
        userName={data.userName}
        age={data.age}
        onDelete={deleteItems}
      />
    ));
  }
  function handle() {
    setValid(true);
  }

  return (
    <Wrapper>
      <div>
        <ProfileInput onAdd={addInputs} />
      </div>
      <div className="profile-cont">{content}</div>
      <Module
        click={handle}
        className={valid ? "module hidden" : "module"}
        error={error}
      />
    </Wrapper>
  );
}

export default App;
