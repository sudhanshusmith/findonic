import React, { useEffect, useState } from "react";

import { useHttpClient } from "../../util/components/hooks/http-hook";

import classes from "./News.module.css";
import "./news.css";

import outline from "../../images/news/ic_outline-comment.png";
import group2 from "../../images/news/Group 2.svg";
import frame from "../../images/news/Frame.svg";
import ErrorModal from "../../util/components/ErrorModal";

function News() {
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

      {isLoading || !loadedPosts && (
        <div className='flex flex-col justify-center items-center h-screen'>
          <h2>Loading Posts....</h2>
          <p>Please hang on.</p>
        </div>
      )}
      {!isLoading && loadedPosts && (
        <div className="container" id="newss">
          <div className="row black-bor">
            <div className="col-lg-2 blue-bor left-bar">Left Section</div>

            <div className="col-lg-6 blue-bor middle-home-bar">
              <div className="row">
                <div className="col-12  blue-bor profile-icon d-flex align-items-center p-0">
                  <img src={outline} className="" alt="" />
                  <p className=" mx-1 mt-2 align-items-center">Technology</p>
                </div>
                <div className="col-12  red-bor profile-icon  user">
                  <div className="row">
                    <div className="col-10 black-bor d-flex align-items-center p-0">
                      <img src={group2} className="" alt="" />
                      <p className=" mx-1 mt-2 align-items-center font-bold">
                        Findonic
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 blue-bor px-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
                <div className="col-12 blue-bor px-5 d-flex justify-content-center ">
                  <div className="post-photos-1 d-flex justify-content-center">
                    <img className="my-4" src={frame} alt="" />
                  </div>
                </div>

                <div className="col-12 blue-bor p-0">
                  <hr className="my-1" />
                </div>

                {loadedPosts.map((item) => (
                  <div>
                    <div className="col-12  blue-bor profile-icon d-flex align-items-center p-0">
                      <img src={outline} className="" alt="" />
                      <p className=" mx-1 mt-2 align-items-center">
                        Technology
                      </p>
                    </div>
                    <div className="col-12  red-bor profile-icon  user">
                      <div className="row">
                        <div className="col-10 black-bor d-flex align-items-center p-0">
                          <img src={group2} className="" alt="" />
                          <p className=" mx-1 mt-2 align-items-center font-bold">
                            Findonic
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 blue-bor px-5">
                      <h3>{item.title}</h3>
                      <p>
                        {item.description}
                       
                      </p>
                    </div>

                    <div className="col-12 blue-bor p-0">
                      <hr className="my-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>




            <div className="col-lg-4 blue-bor">
              <div className="row px-4">
                <div className="col-2 mt-3 search-bar blue-bor right-bar d-flex align-items-center justify-content-center">
                  <img
                    className="img-fluid"
                    src="akar-icons_search.svg"
                    alt=""
                  />
                </div>
                <div className="col-10 mt-3  blue-bor right-bar">
                  <input type="text" placeholder="Search" name="" id="" />
                </div>
              </div>

              <div className="col-12 mt-3 blue-bor notice-board">
                <h4 className="">NOTICE BOARD</h4>
                <div className="row">
                  <div className="col-12">
                    <h6 className="">TLDR; OUT!!</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="blue-bor ">
                      <a className="more" href="">
                        <img src="ep_more.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-12">
                    <h6 className="">Course Registration Deadline</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <div className="blue-bor ">
                      <a className="more" href="">
                        <img src="ep_more.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-12">
                    <h6 className="">New IG Post on BSP!</h6>
                    <div className="row">
                      <div className="col-md-8">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua
                        </p>
                      </div>
                      <div className="col-md-4">
                        <img
                          className="img-fluid"
                          src="image 2.png"
                          alt="Error Loading"
                        />
                      </div>
                    </div>
                    <div className="blue-bor ">
                      <a className="more" href="">
                        <img src="ep_more.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-3">
                    <a className="show-more" href="">
                      Show More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default News;
