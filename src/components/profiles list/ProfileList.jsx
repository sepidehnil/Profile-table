import "./profileList.css";
function ProfileList(props) {
  function deleteItems() {
    props.onDelete(props.id);
  }
  return (
    <div className="list-border" onClick={deleteItems}>
      {props.userName} ({props.age}) years old
    </div>
  );
}
export default ProfileList;
