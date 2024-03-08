import axios from "axios";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import toast, { Toaster } from "react-hot-toast";
import {  useParams } from "react-router-dom";
import Nav from "../Nav/Nav";


function BookingPage() {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [date, setDate] = useState(new Date());
  
    useEffect(() => {
      axios
        .get("/hotels.json")
  
        .then((res) => {
          setDetails(res.data?.filter((x) => x.id == id));
        });
    }, [id]);
    console.log(details);
  
    const handleApplyBtn = (item) => {
      let newHotel = {};
      let preHotel = JSON.parse(localStorage.getItem("hotels"));
  
      let searchedJob = preHotel?.find((data) => data.id == item.id);
      if (!searchedJob) {
        if (!preHotel) {
            newHotel = [item];
          localStorage.setItem("hotels", JSON.stringify(newHotel));
          toast.success("Successfully applied");
        } else {
            newHotel = [...preHotel, item];
          localStorage.setItem("jobs", JSON.stringify(newHotel));
          toast.success("Successfully applied");
        }
      } else {
        toast.error("Already applied");
      }
    };
  return (
    


    <div className="m-6">
        <Nav/>
        <div className="text-blue-600 m-4"> 
      <ReactDatePicker selected={date} onChange={(date) => setDate(date)} />
    </div>
        <h1 className="font-bold text-3xl">{details?.name}</h1>
        <p>{details?.location}</p>
        <p>{details?.prize}</p>
        <div> <p> Rating:{details?.rating}</p>
        <div className="flex gap-4 mt-6 mb-2">
        <img className="h-72 w-[50%] " src={details?.image} alt="" />
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
        
       
        </div>
        
        <button
            onClick={() => handleApplyBtn(details)}
            className="p-2 border bg-blue-500 rounded-lg w-full mt-4 font-bold"
          >
            BOOK NOW
          </button>
          
          <Toaster />
      
    </div>
  )
}

export default BookingPage
