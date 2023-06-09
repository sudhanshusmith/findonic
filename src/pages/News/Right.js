import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import nike from "../../images/advertisment/nike.jpg";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Nike",
    image: nike,
    website: "https://www.nike.com/in/",
    about: "Best shoes selling company in India ever! Servicing since 90 Years.",
    callToActionText: "Website"
  },
  {
    id: 2,
    name: "Nike",
    image: nike,
    website: "https://www.nike.com/in/",
    about: "Best shoes selling company in India ever! Servicing since 90 Years.",
    callToActionText: "Website"
  },
 
];

function Right() {
  return (
    <>
     
       {data.map(item => (
        <div key={item.id} className="my-3 mb-2 shadow-md px-3 pt-3 mr-3 rounded-xl border-2 border-gray-200 ">
        <p className="">
          Sponsored
          <span className="float-right font-medium">
            Create Ad <InfoIcon />
          </span>
        </p>
        <a href={item.website} className="no-underline">
        <div className="text-center">
        <img src={item.image} className="w-20"></img>
        </div>
        <p className="text-gray-950">
          {item.name}
          <a href= {item.website} className="float-right font-medium text-purple-700 no-underline">
            {item.callToActionText}
          </a>
        </p>
        <p className="font-normal">{item.about}</p>
        </a>
        </div>
        
       ))}
      
    </>
  );
}

export default Right;
