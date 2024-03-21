import { createContext, useState } from "react";
import Profile from "./components/Profile";

export const NameContext = createContext();

const App = () => {

  const [name, setName] = useState('Guest');

  return (
    <div>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {name}</p>
      <NameContext.Provider value={{ name, setName }}>
        <Profile />
      </NameContext.Provider>
    </div>
  )
}

export default App;