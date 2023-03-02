import logo from './logo.svg';
import './App.css';

/* Thsi is the right way to import components, one by one so i will
only have what ist necessary
?||     import Button from 'react-bootstrap/Button'
*/
//I will use this method to impor many components at once
import { Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

//This imports the Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Form className='mt-5'>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Example@gmail.com'/>
            <Form.Text className='text-muted'>
              We'll never share your email address, trust us!
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='12345678'/>
            <Form.Text className='text-muted'>
              Shhhh! it is a secret!
            </Form.Text>
          </Form.Group>

          <Button className='m-3' variant='secondary'>Login</Button>
        </Form>

        <Card className='text-dark m-4'>
          <Card.Img src='https://picsum.photos/800' style={{width: '80%', margin: '0 auto'}}/>
          <Card.Body>
            <Card.Title>
              Title Example
            </Card.Title>

            <Card.Text>
              Bootstrap has components for everything :D
            </Card.Text>
            <Button variant='dark'>Test Button</Button>
          </Card.Body>
        </Card>

        <Breadcrumb>
            <Breadcrumb.Item active>Test 1</Breadcrumb.Item>
            <Breadcrumb.Item>Test 2</Breadcrumb.Item>
            <Breadcrumb.Item>Test 3</Breadcrumb.Item>
        </Breadcrumb>

        <Alert variant='success'  className='px-5'>This is a button</Alert>
        <Button>Test Button</Button>

      </header>
    </div>
  );
}

export default App;
