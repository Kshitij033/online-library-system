import logo from '/vite.svg'
import NavigationBar from './components/NavigationBar'
import { Outlet } from 'react-router-dom'



function App() {

  return (
    <div className='min-h-screen bg-gray-50'>
      <NavigationBar />
      <Outlet />
    </div>
  )
}

export default App
