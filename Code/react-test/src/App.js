import './App.css';
import Football from './components/Football'
import Goal from './components/Goal';
import Garage from './components/Garage';
import YourName from './components/YourName';
import MyFord from './components/MyFord';
import MyTimer from './components/MyTimer';

function App() {
  return (
    <div className="App">
      <h3>Hola React JS</h3>
      <Football info='Goal!' inside='Take the shot!' />
      <Goal isGoal={true}/>
      <Garage />
      <YourName />
      <MyFord color='orange'/>

      <MyTimer interval={60000}/>
      
    </div>
  );
}

export default App;
