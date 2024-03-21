import { useContext } from "react";
import { NameContext } from "../App";

const Name = () => {

const { name, setName } = useContext(NameContext);

    const handleUpdate = (e) => {
        setName(e.target.value);
    }
    
  return (
      <div>
          <input 
              type="text"
              value={name}
              onChange={handleUpdate}
              name="name"
          />
    </div>
  )
}

export default Name