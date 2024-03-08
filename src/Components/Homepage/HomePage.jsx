import axios from "axios";
import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import Nav from "../Nav/Nav";


function HomePage() {
    const [hotels, seHotels] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
   

    useEffect(() => {
        axios
          .get("/hotels.json")
    
          .then((res) => seHotels(res.data));
      }, []);
      console.log(hotels)
  return (

    <div>
        <Nav/>
       
        <div className="grid  p-16 rounded-[10px] gap-7 bg-gray-200">
        <form action="">
          <div className=" flex justify-evenly items-center rounded-[8px] gap-[10px] p-5 bg-white shadow-lg shadow-slate-400">
            <div className=" flex gap-2 items-center ">
             
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-[100%] bg-transparent text-l text-blue-700 p-3 h-3  focus:outline-none"
                placeholder="Search here......your needs"
              />
            </div>
            <button className="uppercase px-14 rounded-[8px] bg-blue-500 py-2 text-xl font-semibold text-white">Search your favourites</button>
            
          </div>
        </form>
      </div>
    <div className=" m-2 flex gap-6" >


        {hotels.filter((hotel)=>{
             return searchTerm.toLowerCase() === ""
             ? hotel
             : hotel.name?.toLowerCase().includes(searchTerm);

        }).map((hotel,i)=>{

          return  <div key={i}>
               <div className="">
                <img src={hotel.image} className="h-60 w-full object-contain" alt="" />
                <h1 className="font-bold">{hotel.name}</h1>
                <p>{hotel.location}</p>
                <p>{hotel.prize}</p>
                <div>
                    {hotel.rating}
                    {hotel.feedback}
                </div>
                <Link to={`/booking/${hotel.id}`}>
                <button className="bg-blue-700 text-white border px-4 py-1"> More Details</button>
                </Link>
               </div>

            </div>
           

        })}
        
    </div>
    </div>








)
  }

export default HomePage 