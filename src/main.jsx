import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// To be able to use the Car component, you have to import the Vehicle.jsx file in your application
import Car from './components/Vehicle.jsx'
import App from './App.jsx'

  // const myElement  = (
  //   <table>
  //     <tr>
  //       <th>Name</th>
  //     </tr>
  //     <tr>
  //       <td>Vineet</td>
  //     </tr>
  //     <tr>
  //       <td>Sahil</td>
  //     </tr>
  //   </table>
  // );


  // createRoot is a built-in function that is used to create a root node for a React application
createRoot(document.getElementById('root')).render  ( // render method defines what to render in the HTML container
  // myElement

  // Now we import the Vehicle.jsx file in the application, and we can use the Car component as if it was created here
  <Car />
)
