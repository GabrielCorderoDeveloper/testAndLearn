import { useEffect, useState } from 'react'
import axios from 'axios';

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User []>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    
    axios.get<User []>('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message)
        setLoading(false);
      });
  }, [])

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id));

    axios.delete('https://jsonplaceholder.typicode.com/users/' + user.id)
      .catch(err => {
        setError(err.message);
        setUsers(originalUsers);
      })
  }

  const addUser = () => {
    const newUser = { id: 0, name: 'Mosh'};
    setUsers([newUser, ...users])

    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
    .then(res => setUsers([res.data, ...users]));
  }

  return (
    <>
      {error && <p className='text-danger'>{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className='btn btn-primary mb-3' onClick={addUser}>Add</button>
      <ul className='list-group'>
        {users.map((user) => (
          <li key={user.id} className='list-group-item d-flex justify-content-between'>
            {user.name}
            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
