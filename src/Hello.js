import "./styles.css";

export default function Hello(props) {

function handleClick() {
  alert(`Your name is ${props.names}`)
}

function renderNames() {
  return props.names.map( function renderName(name) {
    return <p>Hello {name}</p>    
  } 
  )
}

let myClass;
if (props.names === "World") {
  myClass = "word"
}
else {
  myClass = "name"
}

  return(
    <div>
      <h1>Welcome to Hello App</h1>
      {/* <h1 className={myClass}>Hello {props.names}!</h1> */}
      {renderNames()}
      <button onClick={handleClick}>Push</button>
    </div>
  )
}


