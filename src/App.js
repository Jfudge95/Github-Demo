import { useState } from "react";
// Below are our components
import Input from "./Components/Input";
import Display from "./Components/Display";

function App() {
  const [userData, setUserData] = useState(undefined);

  const display = userData && <Display userData={userData} />; //Conditional Rendering Display only runs once we get userData.
  return (
    <div>
      <Input setUserData={setUserData} />
      {display}
    </div>
  );
}

export default App;

// conditional rendering
// username -> what you type -> input
// user -> data from github -> app
