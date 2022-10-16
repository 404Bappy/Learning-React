import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}

function Person() {

  return (
    <div className='person'>
      <h1>Arfat Bappy</h1>
      <h4>Profession: Footballer</h4>
    </div>
  );
}

export default App;
