//how to data send
import React, {useState,useContext} from 'react'    //useState is hooks
import UserContext from '../context/UserContext'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
        
    }
  return (
    <div className = "max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
        <h2 className='text-2xl font-semibold text-center text-gray-800'>Login</h2>
    
        <input type ='text' 
        value = {username}
        onChange = {(e) => setUsername(e.target.value)}
        placeholder='username' className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500'/>
        {" "}
        <input type ='text'
        value = {password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' className ='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500'/>
        <button onClick={handleSubmit} className='w-full bg-purple-700 py-2 rounded-md text-black hover:bg-purple-900 transition  *:cursor-pointer'>Submit</button>

    </div>
  );
}

export default Login
