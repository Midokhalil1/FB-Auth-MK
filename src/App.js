import { useState } from 'react'
import Login from './scense/Login';
import Protected from './scense/Protected';

function App() {
  const [user, setUser] = useState()
  return (

    <>
    {!user
  ? <Login setUser={setUser} />
  : <Protected />
  }
    </>
    
  );
}

export default App;
