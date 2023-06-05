import React from "react";
import postedLogo from "../../images/logo/filled.png";

function Post(props) {
  return (
    <div className="flex justify-center">
      <div className="pb-4 shadow-lg my-6 mx-2 w-full md:w-10/12  rounded-lg border-2 border-gray-200">
        <div className="flex flex-row mx-3 md:mx-4 mt-4 p-0 items-center">
          <img src={postedLogo} className="w-10 h-10 rounded-full"></img>
          <p className="my-0 mx-2 font-semibold leading-4 text-gray-800">
            Findonic <br></br>
            <span className="text-xs font-medium text-gray-600">
              {props.postDate}
            </span>
          </p>
        </div>
        {props.image ? (
          <div className="flex justify-center p-0">
            <img
              src={props.image}
              className="rounded-3xl p-3 md:p-4  text-center sm:h-80 md:h-72 w-full object-cover object-center"
            ></img>
          </div>
        ) : null}

        <h6 className="mx-3 md:mx-4 mt-2 md:mt-3 mb-2 text-xl text-gray-800 font-bold">
          {props.title}{" "}
        </h6>
        <div className="mx-3 md:mx-4 text-gray-700 font-normal">
        {props.description}
        </div>
      </div>
    </div>
  );
}

export default Post;
