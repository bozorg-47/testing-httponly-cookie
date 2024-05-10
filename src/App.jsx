import { useState } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [input1, setValue1] = useState("")
  const [input2, setValue2] = useState("")

axios.defaults.withCredentials=true;
  let handleSubmit=async(e)=>{
    e.preventDefault()
    const response= await axios.post("http://192.168.150.18:4000/api/login/",{email:input1,password:input2},{
    withCredentials:true,
      
    })
    console.log(response)
    console.log(input1,input2)
  
  }

  const handleRefresh=async()=>{


    const response= await axios.get("http://192.168.150.18:4000/api/user/",{},{
    withCredentials:true,
      
    })
    console.log(response)
  }

  return (
    <>
    <form onSubmit={handleSubmit} >
    <input type="email" value={input1} onChange={(e)=>{setValue1(e.target.value)}} style={{height:"5vh" }}/>
    <input type="password" value={input2} onChange={(e)=>{setValue2(e.target.value)}} style={{height:"5vh"}}/>
    <button >submit</button>
    </form>
    <button onClick={handleRefresh}>refresh</button>
    </>
  )
}

export default App
