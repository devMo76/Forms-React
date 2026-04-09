import { useState } from "react";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPass, setEnteredPass] = useState("");

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    pass: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    console.log(enteredValues);
  }

  function handleEnteredValues(id, value) {
    setEnteredValues((prevVal) => ({
      ...prevVal,
      [id]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) =>
              handleEnteredValues("email", event.target.value)
            }
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleEnteredValues("pass", event.target.value)
            }
            value={enteredValues.pass}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
