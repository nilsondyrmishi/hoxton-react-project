import './App.css';
import {useEffect, useState} from "react";
import Home from "./pages/Home";

function App() {
  const [users, setUsers] = useState([])

  function getUserFromServer(){
    fetch(`http://localhost:4000/categories`)
        .then(r =>r.json())
            .then(userInsServer =>setUsers(userInsServer)
    )

  }
  console.log(users)

  useEffect(getUserFromServer, [])

  return (
      <Home/>

  );
}

export default App;
