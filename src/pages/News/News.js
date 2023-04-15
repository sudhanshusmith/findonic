import React, { useEffect, useState } from 'react';

import { useHttpClient } from '../../util/components/hooks/http-hook';


import classes from "./News.module.css";
import "./news.css";

import outline from '../../images/news/ic_outline-comment.png';
import group2 from '../../images/news/Group 2.svg';
import frame from '../../images/news/Frame.svg';

function News() {

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUsers, setLoadedPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const responseData = await sendRequest(
          'https://findonic-backend.vercel.app/'
        );

        setLoadedPosts(responseData.users);
      } catch (err) {}
    };
    fetchPosts();
  }, [sendRequest]);


  return (
    <React.Fragment>
     {error && (
        <div className={classes.center}>
          <h1>{error}</h1>
        </div>
      )}
      
      {isLoading && (
        <div className={classes.center}>
          <h1>Loading....</h1>
        </div>
      )}
      {!isLoading && loadedUsers && 
      
        <div className="container" id="newss">
      <div class="row black-bor">
        <div class="col-lg-2 blue-bor left-bar">
          {/* <h2 class="text-center mt-3 mb-5 px-4">LOGO</h2> */}
          {/* <div class="row black-bor">

        <div class="col-lg-4 col-1 offset-lg-0 offset-4 d-flex justify-content-center my-2">
          <a href="index.html"><img src="codicon_home.svg" alt="" /></a>
        </div>
        <div class="col-lg-8 col-7 d-flex align-items-center"><a href="" class="text-black">
            <h5>Home</h5>
          </a></div>

        <div class="col-lg-4 col-1 offset-lg-0 offset-4 d-flex justify-content-center my-2">
          <a href="notifications.html"><img src="carbon_notification.svg" alt="" /></a>
        </div>
        <div class="col-lg-8 col-7 d-flex align-items-center text-muted"><a href="notifications.html" class="text-muted">
            <h5>Notifications</h5>
          </a></div>

        <div class="col-lg-4 col-1 offset-lg-0 offset-4 d-flex justify-content-center my-2">
          <a href=""><img src="fluent_document-bullet-list-20-regular.svg" alt="" /></a>
        </div>
        <div class="col-lg-8 col-7 d-flex align-items-center text-muted"><a href="" class="text-muted">
            <h5>Topics</h5>
          </a></div>

        <div class="col-lg-4 col-1 offset-lg-0 offset-4  d-flex justify-content-center my-2">
          <a href=""><img src="carbon_bookmark.svg" alt="" /></a>
        </div>
        <div class="col-lg-8 col-7 d-flex align-items-center text-muted"><a href="" class="text-muted">
            <h5>Bookmarks</h5>
          </a></div>

        <div class="col-lg-4 col-1 offset-lg-0 offset-4 d-flex justify-content-center my-2">
          <a href=""><img src="ph_archive-box.svg" alt="" /></a>
        </div>
        <div class="col-lg-8 col-7 d-flex align-items-center text-muted"><a href="" class="text-muted">
            <h5>Archived</h5>
          </a></div>

        <div class="col-lg-4 col-1 offset-lg-0 offset-4 d-flex justify-content-center my-2">
          <a href="profile.html"><img src="Group 1.svg" alt="" /></a>
        </div>
        <div class="col-lg-8 col-7 d-flex align-items-center text-muted"><a href="profile.html" class="text-muted">
            <h5>Profile</h5>
          </a></div>

        <div class="col-lg-4 col-1 offset-lg-0 offset-4 d-flex justify-content-center my-2">
          <a href=""><img src="ep_more.svg" alt="" /></a>
        </div>
        <div class="col-lg-8 col-7 d-flex align-items-center text-muted"><a href="" class="text-muted">
            <h5>More</h5>
          </a></div>



      </div> */}
          Left Section
        </div>

        <div class="col-lg-6 blue-bor middle-home-bar">
          <div class="row">
            {/* <div class="col-12  blue-bor mt-4 mb-2 "><h4>Home</h4></div> */}
            {/* <div class="col-12  blue-bor profile-icon d-flex align-items-center ">
              <img src="healthicons_ui-user-profile.png" class="" alt="" />
              <p class=" mx-2 mt-2  align-items-center">What's on your mind?</p>
            </div>
            <div class="col-12 mt-2 blue-bor">
              <img class="group-button mx-5" src="Group 15.png" alt="" />
              <button class="post px-4">Post</button>
            </div>
            <div class="col-12 blue-bor p-0">
              <hr class="my-1" />
            </div> */}









            <div class="col-12  blue-bor profile-icon d-flex align-items-center p-0">
              <img src={outline} class="" alt="" />
              <p class=" mx-1 mt-2 align-items-center">Technology</p>
            </div>
            <div class="col-12  red-bor profile-icon  user">
              <div class="row">
                <div class="col-10 black-bor d-flex align-items-center p-0">
                  <img src={group2} class="" alt="" />
                  <p class=" mx-1 mt-2 align-items-center font-bold">
                    Findonic
                  </p>
                </div>
                {/* <div class="col-2 black-bor">
                  <img class={postEdit} src="ep_more.svg" alt="" />
                </div> */}
              </div>
            </div>
            <div class="col-12 blue-bor px-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div class="col-12 blue-bor px-5 d-flex justify-content-center ">
              <div class="post-photos-1 d-flex justify-content-center">
                <img class="my-4" src={frame} alt="" />
              </div>
            </div>
            {/* <div class="col-12 blue-bor px-5 d-flex justify-content-around pt-1">
              <img src="fa-regular_comment.png" alt="" />
              <img src="bx_bx-like.png" alt="" />
              <img src="bx_bx-bookmark-alt-plus.png" alt="" />
              <img src="bx_bx-share.png" alt="" />
            </div> */}
            <div class="col-12 blue-bor p-0">
              <hr class="my-1" />
            </div>

           
















            <div class="col-12  blue-bor profile-icon d-flex align-items-center p-0">
              <img src={outline} class="" alt="" />
              <p class=" mx-1 mt-2 align-items-center">Technology</p>
            </div>
            <div class="col-12  red-bor profile-icon  user">
              <div class="row">
                <div class="col-10 black-bor d-flex align-items-center p-0">
                  <img src={group2} class="" alt="" />
                  <p class=" mx-1 mt-2 align-items-center font-bold">
                    Findonic
                  </p>
                </div>
                {/* <div class="col-2 black-bor">
                  <img class={postEdit} src="ep_more.svg" alt="" />
                </div> */}
              </div>
            </div>
            <div class="col-12 blue-bor px-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            {/* <div class="col-12 blue-bor px-5 d-flex justify-content-center ">
              <div class="post-photos-1 d-flex justify-content-center">
                <img class="my-4" src={frame} alt="" />
              </div>
            </div> */}
            {/* <div class="col-12 blue-bor px-5 d-flex justify-content-around pt-1">
              <img src="fa-regular_comment.png" alt="" />
              <img src="bx_bx-like.png" alt="" />
              <img src="bx_bx-bookmark-alt-plus.png" alt="" />
              <img src="bx_bx-share.png" alt="" />
            </div> */}
            <div class="col-12 blue-bor p-0">
              <hr class="my-1" />
            </div>





            
            
          </div>
        </div>

        <div class="col-lg-4 blue-bor">
          <div class="row px-4">
            <div class="col-2 mt-3 search-bar blue-bor right-bar d-flex align-items-center justify-content-center">
              <img class="img-fluid" src="akar-icons_search.svg" alt="" />
            </div>
            <div class="col-10 mt-3  blue-bor right-bar">
              <input type="text" placeholder="Search" name="" id="" />
            </div>
          </div>

          <div class="col-12 mt-3 blue-bor notice-board">
            <h4 class="">NOTICE BOARD</h4>
            <div class="row">
              <div class="col-12">
                <h6 class="">TLDR; OUT!!</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <div class="blue-bor ">
                  <a class="more" href="">
                    <img src="ep_more.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <hr />

            <div class="row">
              <div class="col-12">
                <h6 class="">Course Registration Deadline</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <div class="blue-bor ">
                  <a class="more" href="">
                    <img src="ep_more.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <hr />

            <div class="row">
              <div class="col-12">
                <h6 class="">New IG Post on BSP!</h6>
                <div class="row">
                  <div class="col-md-8">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                  </div>
                  <div class="col-md-4">
                    <img
                      class="img-fluid"
                      src="image 2.png"
                      alt="Error Loading"
                    />
                  </div>
                </div>
                <div class="blue-bor ">
                  <a class="more" href="">
                    <img src="ep_more.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 mb-3">
                <a class="show-more" href="">
                  Show More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      
      
      }
    </React.Fragment>
    
  );
}

export default News;
