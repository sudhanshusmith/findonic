import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../util/components/hooks/http-hook";

import ErrorModal from "../../util/components/ErrorModal";
import Post from "./Post";
import findoNews from '../../images/logo/findonews.png';
import { json } from "react-router-dom";

function News() {
  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPosts, setLoadedPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          "https://findonic-backend.vercel.app/"
        );

        setLoadedPosts(responseData.posts);
      } catch (err) {}
    };
    fetchPosts();
  }, [sendRequest]);


  return (
    <React.Fragment>
      {/* <ErrorModal error={error} onClear={clearError} /> */}
      {/* {error && (
        <div className={classes.center}>
          <h1>{error}</h1>
        </div>
      )} */}
     <div className="flex items-end mt-24 mb-6">
     <img src={findoNews} className=" w-screen shadow-xl">
      </img>
     </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 "></div>

        {/* Post Section  */}
        <div className="col-span-12 md:col-span-6 ">
          {isLoading ||
            (!loadedPosts && (
              <div className="flex flex-col justify-center items-center h-screen">
                <h2>Loading Posts....</h2>
                <p>Please hang on.</p>
              </div>
            ))}

          {!isLoading &&
            loadedPosts &&
            loadedPosts.slice(0).reverse().map((item) => (
              
              <Post title={item.title} description={ item.description} image={item.image} />
              ) )}
        </div>

        <div className="col-span-12 md:col-span-3 hidden md:block "></div>
      </div>
    </React.Fragment>
  );
}

export default News;
