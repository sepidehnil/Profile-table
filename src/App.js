import ProfileInput from "./components/profile input/ProfileInput";
import ProfileList from "./components/profiles list/ProfileList";
import Module from "./components/module list/Module";
import React, { useState } from "react";

function App() {
  const [addInfo, setInfo] = useState("");
  const [valid, setValid] = useState(true);
  const [clicked, setClicked] = useState(false);

  function addInputs(enteredName, enteredAge) {
    setInfo((prevInputs) => {
      const update = [...prevInputs];
      update.unshift({
        userName: enteredName,
        age: enteredAge,
        id: crypto.randomUUID().toString(),
      });
      return update;
    });
    if (enteredAge <= 0) {
      setValid(false);
    }
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
    setClicked(true);
  }
  return (
    <div className="container">
      <div>
        <ProfileInput onAdd={addInputs} />
      </div>
      <div className="profile-cont">{content}</div>
      <Module
        click={handle}
        className={
          valid
            ? "module hidden"
            : "module" && clicked
            ? "module hidden"
            : "module"
        }
      />
    </div>
  );
}

export default App;
