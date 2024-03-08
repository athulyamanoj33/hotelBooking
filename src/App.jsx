import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Components/Homepage/HomePage"

import BookingPage from "./Components/Booking/BookingPage"
import ConfirmationPage from "./Components/Confirmationpage/ConfirmationPage"


function App() {
  

  return (
    <div>

     
      <div>
     
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/booking/:id" element={<BookingPage/>}/>
      <Route path="/confirm" element={<ConfirmationPage/>}/>
      
    </Routes>
    
    </BrowserRouter>
    </div>
    </div>
  )
}

export default App
