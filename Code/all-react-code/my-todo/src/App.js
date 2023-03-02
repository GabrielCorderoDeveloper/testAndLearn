import './App.css';

/* Thsi is the right way to import components, one by one so i will
only have what ist necessary
?||     import Button from 'react-bootstrap/Button' */
//I will use this method to impor many components at once
import { Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
//This imports the Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchButton';

function App() {
  return (
    //main container
    <div className='main d-flex justify-content-center'>

          <div className="main-container container col-lg-8 col-11  m-2 mt-5 p-3 rounded-3 bg-light text-center"> 
            <h3 className='pb-2'>My to-do list</h3>
            <div className='row justify-content-center'>
            <SearchBar/> <SearchButton/>
            </div>
          </div>

    </div>
  );
}


// todo||  add task list
//? with the ability to be checked

// todo||  add taks counter
// todo||  add removed cheched


export default App;
