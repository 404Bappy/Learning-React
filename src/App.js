import logo from './logo.svg';
import './App.css';

function App() {
  const Name = ['rofiq', 'jabbar', 'shafiq', 'salam']
  return (
    <div className="App">
      <a href="https://www.google.com/">Google</a>
<Person name= {Name[0]} play="ludu"></Person>
<Person name={Name[1]} play="football"></Person>
<Person name="Rabbi" play="Carrom"></Person>
<Person name="shajib" play="COC"></Person>
    </div>
  );
}
/*<Friend phone = '01849675876' Address= 'Dhaka'></Friend>
      <Friend phone = '01749675876' Address= 'RongPur'></Friend>
      <Friend phone = '01949675876' Address= 'Feni'></Friend>

*/

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

function Friend(props) {
  console.log(props);
  return (
    <div className='person'>
       <h3>Phone:{props.phone}</h3>
       <h5>Address:{props.Address}</h5>
    </div>
    
   

  )
}

export default App;
