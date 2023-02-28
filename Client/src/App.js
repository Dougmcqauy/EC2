import React ,{useEffect,useState} from 'react';
import Axios from "axios"

function App() {
  const[msg,setMsg] = useState("")

  useEffect(() => {
   Axios.get("http://localhost:4000/api")
    .then(response => {setMsg(response?.data?.message)})
    .catch(err => {console.log(err)})
  }, [])
  
  return (
    <div className="App">
      <h1>App running</h1>
      <h1>message from server: {msg}</h1>
    </div>
  );
}

export default App;
