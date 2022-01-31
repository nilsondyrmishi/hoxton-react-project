import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [users, setUsers] = useState([])

  function getUserFromServer(){
    fetch(`http://localhost:4000/data`)
        .then(r =>r.json())
            .then(userInsServer =>setUsers(userInsServer)
    )

  }
  console.log(users)

  useEffect(getUserFromServer, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={''} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
