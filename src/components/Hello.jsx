// creating a second component: Hello
const Hello = (props) => {

    // javascript codes
    // console.log(props);

  return (
      <h1>Hello { props.name }!</h1>
  )
} 

export default Hello; // exporting the Hello component