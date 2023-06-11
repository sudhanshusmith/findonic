import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../util/components/hooks/http-hook";

import ErrorModal from "../../util/components/ErrorModal";
import Post from "./Post";
import findoNews from "../../images/logo/findonews.png";
import Right from "./Right";
import TabNavItem from "./TabNavItem";

function News() {
  // const [expanded, setExpanded] = React.useState(false);
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedPosts, setLoadedPosts] = useState();
  const [activeTab, setActiveTab] = useState("all");

  const category = [
    { key: "All Categories", value: "all" },
    { key: "Tech", value: "tech" },
    { key: "Automotive & Mobility", value: "anm" },
    { key: "E-Commerce & D2C", value: "ecom" },
    { key: "EdTech", value: "edu" },
    { key: "FinTech", value: "fin" },
    { key: "AgroTech", value: "atech" },
    { key: "Gaming & Esports", value: "gne" },
    { key: "HealthTech", value: "htech" },
    { key: "Fundings", value: "fundings" },
    { key: "Blockchain", value: "blockchain" },
  ];

  const categoryFullName = {
    ecom: "E-Commerce & D2C",
    edu: "EdTech",
    fin: "FinTech",
    atech: "AgroTech",
    gne: "Gaming & Esports",
    htech: "HealthTech",
    scam: "Scam in Companies",
    fundings: "Fundings",
    blockchain: "Blockchain",
    anm: "Automotive & Mobility",
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
      <div className="flex items-end mt-24 mb-6 sticky top-0 z-20">
        <img
          src={findoNews}
          className=" w-screen h-16 object-cover object-center shadow-xl"
        ></img>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 hidden md:block border- border-purple-700">
          <div className="my-3  sticky top-20 z-10  ml-4">
            <p className=" px-4 text-purple-800 bg-purple-200 py-3 rounded-xl mx-3 text-center text-lg">
              Filter Post by Category:
            </p>
            <ul className="px-4 h-64 scroll-width overflow-y-auto">
              {category.map((item) => (
                <TabNavItem
                  key={item.value}
                  id={item.value}
                  title={item.key}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Post Section  */}
        <div className="col-span-12 md:col-span-6 border- border-purple-700">
          {isLoading ||
            (!loadedPosts && (
              <div className="flex flex-col justify-center items-center h-screen">
                <h2>Loading Posts....</h2>
                <p>Please hang on.</p>
              </div>
            ))}

          {!isLoading &&
            loadedPosts &&
            activeTab == "all" &&
            loadedPosts
              .slice(0)
              .reverse()
              .map((item) => (
                <Post
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  postDate={item.postDate}
                  category={categoryFullName[item.category]}
                  color = {categoryColor[item.category]}
                />
              ))}
          {!isLoading &&
            loadedPosts &&
            activeTab != "all" &&
            loadedPosts
              .slice(0)
              .reverse()
              .filter((apost) => apost.category == activeTab)
              .map((item) => (
                <Post
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  postDate={item.postDate}
                  category={categoryFullName[item.category]}
                  color = {categoryColor[item.category]}
                />
              ))}
        </div>

        <div className="col-span-12 md:col-span-3 hidden md:block border- border-purple-700 ">
          <div className="sticky top-20 z-10">
            <Right />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default News;
