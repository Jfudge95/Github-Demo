import { useState, useEffect } from "react";

import Input from "./Components/Input";
import Display from "./Components/Display";

function App() {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.github.com/users/Jfudge95`); // Setting our profile page as the initial page when we start-up.
      const data = await res.json();
      setUserData(data);
    };

    fetchData();
  }, []); //Dependancy Array

  const display = userData && <Display userData={userData} />; //Conditional Rendering Display only runs once we get userData.
  return (
    <div>
      <Input setUserData={setUserData} />
      {display}
    </div>
  );
}

export default App;

// useState is a React Hook that lets you add a state variable to your component.
// useEffect is a React Hook that lets you synchronize a component with an external system.
// Dependancy Array - This is how we control when it runs. Since we want my profile page to display right when we load, we leave that array empty. However, if we put a STATEFUL VARIABLE into the array, it will only run when that Stateful Variable changes.
// Remember, we are using useEffect here whenever we need to Fetch Data like setting our Profile page as the initial page when the app starts up. By default, useEffect will run on each render.
// Conditional Rendering - It allows you to create dynamic user interfaces that can adapt to changes in data and user interactions.
// Remember, you pass Data down through Props. Example would be ln 22 where we pass down setUserData, the prop, to Input.
// Data Flow - Data can only flow from Parent to Child. HOWEVER, an event in the child can update data in the parent. This is called INVERSE DATA FLOW. Data is not created in the child EVER but it can update the parent.
