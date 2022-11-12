import logo from './logo.svg';
import './App.css';

function App() {
  const Name = ['rofiq', 'jabbar', 'shafiq', 'salam', 'Kalam' ,'raken'] 

const Sports =[
  {Name: 'rofiq', play:'ludu'},
  {Name: 'jabbar', play:'football'},
  {Name: 'shafiq', play:'Carrom'},
  
]
  return (
    <div className="App">
     <ul>
        {
          Name.map(Name => <li>{Name}</li>)
        }
        
     </ul>
<Person name= {Name[0]} play="ludu"></Person>
<Person name={Name[1]} play="football"></Person>
<Person name={Name[2]} play="Carrom"></Person>
<Person name={Name[3]} play="COC"></Person>
<Person name={Name[4]} play="Kabadi"></Person>
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


function MyComponent(){
  return(
    <div> 
      <h1>yo yo mama  </h1>
    </div>
  )
}

export default App;
