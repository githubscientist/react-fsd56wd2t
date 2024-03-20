import './Stats.css';

const Stats = () => {
  return (
    <div className='stats'>
        <div className="card">
              <h4 className="cardHeading">No Of Users</h4>
              <p className="cardBody">100</p>
          </div>      
          
          <div className="card">
              <h4 className="cardHeading">Total Notes</h4>
              <p className="cardBody">35</p>
          </div>      
          
    </div>
  )
}

export default Stats;