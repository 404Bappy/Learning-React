import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <a href="https://www.google.com/">Google</a>
      <Person name="Sabbir" play="ludu"></Person>
      <Person name="bappy" play="football"></Person>
      <Person name="Rabbi" play="Carrom"></Person>
      <Person name="shajib" play="COC"></Person>
    </div>
  );
}

function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '10px'
  }

  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Profession: {props.play}</h4>
    </div>
  );
}

function Friend() {
  return (
    <h3>Phone:</h3>

  )
}

export default App;
