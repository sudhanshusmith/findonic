import React, { useState } from "react";

function ReadMore({ children, description }) {
  const abcd = description.split("\n");
  // const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <p className="text-base font-normal">
        {isReadMore ? abcd[0].slice(0,250) : abcd.map(item => (
          <div>{item}<br></br></div>
          ))}
        <span
          onClick={toggleReadMore}
          className="text-purple-700 font-bold cursor-pointer"
        >
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
      {/* {abcd.map((item) => (
              <div>
                {item} <br></br>
              </div>
            ))} */}
    </>
  );
}

export default ReadMore;
