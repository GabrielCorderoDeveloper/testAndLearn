import Alerts from "./components/Alerts"
import ListGroup from "./components/ListGroup"

function App() {
  const items: string[] = ['New York', 'San Francisco', 'Tokyo', 'London'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <>
      <ListGroup items={items} heading={'Cities'} onSelectItem={handleSelectItem}/>
    </>
  )
}

export default App
