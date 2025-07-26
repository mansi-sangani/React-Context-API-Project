import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <div className='min-h-screen bg-gray-100 text-center p-6'>
      <h1 className='text-3xl font-bold text-purple-700 mb-6'>React with Chai and share is important</h1>
      <Login />
      <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App;
