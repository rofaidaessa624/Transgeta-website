import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from './Component/MasterLayout/MasterLayout';
import Ethics from './Pages/Ethics/Ethics';
import Home from './Pages/Home/Home';

function App() {
  const [count, setCount] = useState(0);
  const routes=createBrowserRouter([{
    path:'/',
    element:<MasterLayout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/ethics",element:<Ethics/>}
    ]
}])
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
