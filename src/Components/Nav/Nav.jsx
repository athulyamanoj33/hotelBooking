import { useNavigate } from "react-router-dom"







function Nav() {
   
  const navigate= useNavigate()
  return (
    <div>
        <div className="bg-blue-700 flex p-6 text-white justify-evenly  ">
            <h1 className="text-4xl font-bold ">
                HOTEL BOOKING
            </h1>
            <h1 className="cursor-pointer border p-2" onClick={()=>navigate("/")} >Home</h1>
           
            
           
            <h1  className="cursor-pointer border p-2" onClick={()=>navigate("/confirm")}>Booked hotels</h1>
            <h1  className="cursor-pointer border p-2" onClick={()=>navigate("")}>Contacts</h1>

        </div>

        
  
      
    </div>
  )
}


export default Nav
