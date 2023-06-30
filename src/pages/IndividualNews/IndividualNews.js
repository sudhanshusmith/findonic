import React, { useEffect, useState } from "react";
// import Loader from "react-js-loader";
import { useHttpClient } from "../../util/components/hooks/http-hook";
import postedLogo from "../../images/logo/filled.png";
import { Link, useParams } from "react-router-dom";
import Post from "../News/Post";
import MusicBarLoader from "../../components/MusicBarLoader/MusicBarLoader";

function IndividualNews() {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPosts, setLoadedPosts] = useState();

  const urlId = useParams().id;

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

  const categoryFullName = {
    ecom: "ECommerce",
    edu: "EdTech",
    fin: "FinTech",
    atech: "AgroTech",
    gne: "Gaming",
    htech: "HealthTech",
    scam: "Scam",
    fundings: "Fundings",
    blockchain: "Blockchain",
    anm: "Automobile",
    tech: "Tech",
  };

  const categoryColor = {
    ecom: "purple",
    edu: "blue",
    fin: "yellow",
    atech: "green",
    gne: "blue",
    htech: "green",
    scam: "red",
    fundings: "purple",
    blockchain: "green",
    anm: "yellow",
    tech: "blue",
  };

  return (
    <>
      {/* Post Section  */}
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 mt-24 mb-6 border- border-purple-700">
          {isLoading ||
            (!loadedPosts && (
              <div className="flex flex-col my-28 items-center  h-screen">
                <MusicBarLoader />
                <h2>Loading Posts....</h2>
                <p>Please hang on.</p>
              </div>
            ))}

          {!isLoading &&
            loadedPosts &&
            loadedPosts
              .filter((item) => item.id === urlId)
              .map((item) => (
                <Post
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  postDate={item.postDate}
                  category={categoryFullName[item.category]}
                  color={categoryColor[item.category]}
                  readMoreEnabled={false}
                  expandable={false}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default IndividualNews;
