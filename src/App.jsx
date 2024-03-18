import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faHouse} />
    </div>
  )
}

export default App;