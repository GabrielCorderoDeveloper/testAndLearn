import ListGroup from "./components/ListGroup/ListGroup";
import { BsFillCalendarFill } from 'react-icons/bs'
import Like from './components/Like/Like'

function App() {
  const items: string[] = ['New York', 'San Francisco', 'Tokyo', 'London'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <Like onClick={() => console.log('clicked')}/>
    </>
  )
}

export default App
