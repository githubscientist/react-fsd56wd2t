import GrandChildCom from "./GrandChildCom";

const ChildCom = ({ count, setCount }) => {
  return (
    <div>
          <GrandChildCom count={count} setCount={ setCount } />      
    </div>
  )
}

export default ChildCom;