import { useState } from "react";

function Input({ setUserData }) {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //This prevents the page from auto-resfreshing. We dont want to auto-refresh forms.
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setUserData(data);
    setUsername("");
  };

  const clear = () => {
    setUserData(undefined);
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={handleChange}
          placeholder="username"
        />
        <input type="submit" />
      </form>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default Input;

// ln 6 the e stands for event. Stands for the event in the input.
// Remember ({ setUserData }) we are DESTRUCTURING.
