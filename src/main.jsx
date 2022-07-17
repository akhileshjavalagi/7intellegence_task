import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//Here I imported chakraProvider to run the chakra ui in the application.
import { ChakraProvider } from '@chakra-ui/react'

//Here I imported browserRouter to run all the routers in the application.
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
       <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
