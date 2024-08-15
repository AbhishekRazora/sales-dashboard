import { useState } from 'react'
import './App.css'
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/Dashboard2';
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom';
import Layout from './components/Layout';


const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Dashboard1/>}/>
    <Route path='/dashboard-2' element={<Dashboard2/>}/>

  </Route>
))

function App() {
  const [Dash1, setDash1] = useState(true)

  return (
    <RouterProvider router={router}/>
  );
}

export default App
