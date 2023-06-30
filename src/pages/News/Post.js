import React from "react";
import postedLogo from "../../images/logo/filled.png";
import ReadMore from "./ReadMore";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import copy from "copy-to-clipboard";

function Post(props) {
  const id = props.id;
  console.log(id);
  const path = "/news/" + id;
  const postURL = "https://www.findonic.com" + path;

  const copyToClipboard = () => {
    copy(postURL);
    alert(`Post URL has been copied Successfully!`);
  };

  function bgColor(status) {
    switch (status) {
      case "blue":
        return "rgb(191 219 254)";
      case "purple":
        return "rgb(233 213 255)";
      case "yellow":
        return "rgb(254 240 138)";
      case "green":
        return "rgb(187 247 208)";
      case "red":
        return "rgb(254 215 170)";
      default:
        return "";
    }
  }

  return (
    <div className="flex justify-center">
      <div className="pb-4 shadow-md my-3 mx-2 w-full md:w-10/12  rounded-lg border-2 border-gray-200">
        <div className=" mx-3 md:mx-4 mt-4 p-0  border- border-purple-700">
          <div className="flex flex-row items-center">
            <img src={postedLogo} className="w-10 h-10 rounded-full"></img>
            <p className="my-0 mx-2 font-semibold leading-4 text-gray-800 border- border-purple-900 w-full">
              Findonic
              <br></br>
              <span className="text-xs font-medium text-gray-900">
                {props.postDate}
              </span>
            </p>
            <span
              style={{
                background: bgColor(props.color),
              }}
              className="float-right rounded-lg py-2 px-3 flex justify-center items-center"
            >
              {props.category}
            </span>
            {props.expandable ? (
              <Link to={path}>
                <span className="px-2 text-4xl hover:text-purple-700">
                  <ZoomOutMapIcon />
                </span>
              </Link>
            ) : (
              <></>
            )}
            <span
              className="px-2 text-4xl hover:text-purple-700"
              onClick={copyToClipboard}
            >
              <ShareIcon />
            </span>
          </div>
        </div>

        {props.image ? (
          <div className="flex justify-center p-0">
            <img
              src={props.image}
              className="rounded-3xl p-3 md:p-4  text-center sm:h-80 md:h-72 w-full object-cover object-center"
            ></img>
          </div>
        ) : null}

        <h6 className="mx-3 md:mx-4 mt-2 md:mt-3 mb-2 text-xl text-gray-800 font-semibold">
          {props.title}{" "}
        </h6>
        <div className="mx-3 md:mx-4 text-gray-700 font-normal entry-footer excerpt">
          <ReadMore
            description={props.description}
            readMoreEnabled={props.readMoreEnabled}
          ></ReadMore>
        </div>
      </div>
    </div>
  );
}

export default Post;
