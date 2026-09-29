import { createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Cars from './Pages/Cars/Cars'
import CarDetails from './Pages/CarDetails/CarDetails'
import MainLayout from './Layouts/MainLayout/MainLayout'
import CarContextProvider from "./Context/CarsContext";

const router = createHashRouter([
 {path:'/' , element: <MainLayout/>, children: [
   {index: true, element: <Home/>},
   {path: 'cars', element: <Cars/>},
   {path: 'cars/:id', element: <CarDetails/>},
 ]}
])

function App() {
  return (
    <>
    <CarContextProvider>
      <RouterProvider router={router}/>
    </CarContextProvider>
    </>
  )
}

export default App
