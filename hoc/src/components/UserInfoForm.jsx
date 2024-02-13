/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// import withEditableUser from "../hoc/withEditableUser";
import withEditableResource from "../hoc/withEditableResource";

function UserInfoForm({ user, onChangeUser, onSaveUser, onResetUser }) {
  const { name, age, hairColor } = user || {};

  return user ? (
    <>
      <label>
        Name:
        <input
          value={name}
          onChange={(e) => onChangeUser({ name: e.target.value })}
        />
      </label>

      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
        />
      </label>

      <label>
        Hair Color:
        <input
          value={hairColor}
          onChange={(e) => onChangeUser({ hairColor: e.target.value })}
        />
      </label>

      <button onClick={onResetUser}>Reset</button>
      <button onClick={onSaveUser}>Save Changes</button>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default withEditableResource(
  UserInfoForm,
  "http://localhost:8080/users/456",
  "user"
);
// export default withEditableUser(UserInfoForm, "456");
