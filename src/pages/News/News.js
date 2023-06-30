import React, { useEffect, useState } from "react";
import { useHttpClient } from "../../util/components/hooks/http-hook";
import Loader from "react-js-loader";

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
    { key: "Scam in Companies", value: "scam" },
    { key: "Fundings", value: "fundings" },
    { key: "Blockchain", value: "blockchain" },
  ];

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
      <p className="text-center">Note: This Page only shows latest 5 News in Each Category.</p>
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
              <div className="flex flex-col my-28 items-center  h-screen">
              <Loader type="box-rectangular" bgColor={"rgb(107 33 168)"} title={""} color={''} size={100} />
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
              .slice(0,5)
              .map((item) => (
                <Post
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  postDate={item.postDate}
                  category={categoryFullName[item.category]}
                  color = {categoryColor[item.category]}
                  readMoreEnabled = {true}
                  expandable={true}
                />
              ))}
          {!isLoading &&
            loadedPosts &&
            activeTab != "all" &&
            loadedPosts
              .slice(0)
              .reverse()
              .filter((apost) => apost.category == activeTab)
              .slice(0,5)
              .map((item) => (
                <Post
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  postDate={item.postDate}
                  category={categoryFullName[item.category]}
                  color = {categoryColor[item.category]}
                  readMoreEnabled = {true}
                  expandable={true}
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
