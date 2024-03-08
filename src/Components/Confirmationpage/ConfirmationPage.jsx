import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";



function ConfirmationPage() {
    const [data, setData] = useState([]);
    
  
  

  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem("hotels"));
    
    setData(getData);
  }, []);
  console.log(data);
    
  return (
    <div>
        <Nav/>
    <div className="flex justify-center items-center mt-10">
        
        <div>
        <h1 className=" font-bold text-5xl mb-5">Summary of booking</h1>
        <p></p>
        {data?.map((single,i)=>{
            return( <div className=" border p-4" key={i}> 
                <h1 className="font-semibold mb-2">{single.name}</h1>
                <div className="flex gap-2"><img  className="" src={single.image} alt="" />
                <p className="w-64">{single.location} <br />{single.prize} <br /> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour </p></div>
                
                
                </div>) 
        })}

        <button  className="text-white bg-blue-700 mt-5 px-4 py-1 w-full font-semibold uppercase">Confirm booking</button>
        </div>
      
    </div>
    </div>
  )
}

export default ConfirmationPage
