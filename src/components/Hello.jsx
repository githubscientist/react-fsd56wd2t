import './Hello.css';

// creating a second component: Hello
const Hello = (props) => {

  return (
      <h1 className="header">Hello { props.name }!</h1>
  )
} 

export default Hello; // exporting the Hello component