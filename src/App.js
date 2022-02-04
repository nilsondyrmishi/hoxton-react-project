import './App.css';
import { Route, Routes } from "react-router-dom";

import { useState} from "react";
import Home from "./pages/Home";
import NavBar from "./components/Header/NavBar";
import RegisterLogIn from "./pages/RegisterLogIn";
import NotFound from "./pages/NotFound";
import Bucket from "./pages/Bucket";
import Clothes from "./pages/Clothes";
import ClothesDescription from "./pages/ClothesDescription";

function App() {
  const [users, setUsers] = useState([])



  return (
      <div className="App">
          <NavBar users={users} setUsers={setUsers}/>
      <Routes>
        <Route index element={<Home/>}/>
          <Route path="clothes" element={<Clothes/>}/>
          <Route path="clothes/id" element={<ClothesDescription
              users={users}
              setUsers={setUsers}/>
          }/>
          <Route path="login"
                 element={
              <RegisterLogIn
              setUsers={setUsers}/>
          }
          />
          <Route path="bucket" element={<Bucket users={users} setUsers={setUsers}/> }/>
          <Route path="*" element={<NotFound />} />

      </Routes>
      </div>
  );
}

export default App;
