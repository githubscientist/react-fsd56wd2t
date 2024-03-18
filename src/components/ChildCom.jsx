import GrandChildCom from "./GrandChildCom";

const ChildCom = ({ count }) => {
  return (
    <div>
        <GrandChildCom count={ count } />      
    </div>
  )
}

export default ChildCom;