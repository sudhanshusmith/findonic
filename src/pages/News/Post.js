import React from 'react'
import postedLogo from "../../images/logo/filled.png";

function Post(props) {
  return (
    <div className="pb-6 shadow-lg my-16 mx-2  rounded-lg border-2 border-gray-200">
            <div className="flex flex-row mx-3 md:mx-4 mt-4 p-0 items-center">
              <img src={postedLogo} className="w-10 h-10 rounded-full"></img>
              <p className="my-0 mx-2 font-semibold leading-4 text-gray-800">
                Findonic <br></br>
                <span className="text-xs font-medium text-gray-600">30 June 2023</span>
              </p>
            </div>
            <div className="flex justify-center p-0">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="rounded-3xl p-3 md:p-4  text-center sm:h-80 md:h-72 w-full object-cover object-center"></img>
            </div>
            <h6 className="mx-3 md:mx-4 mt-2 md:mt-3 mb-2 text-xl text-gray-800 font-bold">{props.title} </h6>
            <p className="mx-3 md:mx-4 text-gray-700 font-normal">{props.description}</p>
            
          </div>
  )
}

export default Post