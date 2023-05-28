import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


import fullLogo from "../../images/logo/finonicFull.png";
import longLogo from "../../images/logo/findonicLogo2.png";

function Navbar() {

  const [dopened, setDopened] = useState(false);
  
  function DopenHandeler(){
    if(dopened){
      setDopened(false);
    }else{
      setDopened(true);
    }
  }

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="nav-component w-nav"
    >
      <div className="nav-container w-container">
        <div
          id="w-node-b67e7efd-255e-321b-f527-21631dbc0c72-1dbc0c70"
          className="first-element"
        >
          <Link to="/" aria-current="page" className="brand w-nav-brand w--current">
            <img src={longLogo} loading="lazy" width="100" alt="" />
          </Link>
          <div className="shrink-item">
            <div className="flex-center">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <Link
                  to="/"
                  // aria-current="page"
                  className="nav-link w-nav-link w--current"
                >
                  Home
                </Link>
                <Link to="/about" className="nav-link w-nav-link">
                  About
                </Link>
                <Link to="/news" className="nav-link w-nav-link">
                  News
                </Link>
                {/* <div
                  data-hover="true"
                  data-delay="0"
                  className="dropdown w-dropdown"
                >
                  <div className="dropdown-toggle w-dropdown-toggle">
                    <div className="dropdown-arrow w-icon-dropdown-toggle"></div>
                    <div>Pages</div>
                  </div>
                  <nav className="dropdown-list w-dropdown-list">
                    <a href="/news" className="dropdown-link w-dropdown-link">
                      News
                    </a>
                    <a
                      href="/plans-eccomerce"
                      className="dropdown-link w-dropdown-link"
                    >
                      Plans Eccomerce
                    </a>
                    <a href="/legal" className="dropdown-link w-dropdown-link">
                      Legal
                    </a>
                    <a
                      href="/template-info/style-guide"
                      className="dropdown-link w-dropdown-link"
                    >
                      Style Guide
                    </a>
                    <a
                      href="/template-info/licensing"
                      className="dropdown-link w-dropdown-link"
                    >
                      Licensing
                    </a>
                  </nav>
                </div> */}
                <Link to="/contact" className="nav-link w-nav-link">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex-nav-button">
          <a
            href="https://chat.whatsapp.com/DXslO152avbEzcnuZJIh8C"
            className="button-line-link hide-mobile w-inline-block"
          >
            <div className="p-0">Join US</div>
          </a>
          <a
            href="https://wa.me/+917870565464"
            className="button-arrow-link hide-landscape w-inline-block"
          >
            <div className="button-label ">
              <div className="label-button ">Get in Touch</div>
              <div className="arrow-wrapper p-0">
                <img
                  src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e25424962bf135c7305306_next.svg"
                  loading="lazy"
                  alt=""
                  className="icon-arrow"
                />
              </div>
            </div>
          </a>
          <div className="menu-button w-nav-button" onClick={DopenHandeler} >
            <img
              src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e22d96dd964abe10b3e208_icon-menu.svg"
              loading="lazy"
              width="30"
              alt=""
            />
          </div>
        </div>
      </div>
     {dopened?  <div
        className="w-nav-overlay"
        data-wf-ignore=""
        id="w-nav-overlay-0"
        style={{ height: "9921.86px", display: "block" }}
      >
        <nav
          role="navigation"
          className="nav-menu w-nav-menu"
          data-nav-menu-open=""
          style={{
            transform: "translateY(0px)",
            transition: "transform 400ms ease 0s",
          }}
        >
          <Link
            to="/"
            aria-current="page"
            className="nav-link w-nav-link w--current w--nav-link-open"
            style={{ maxWidth: "1200px" }}
            onClick={DopenHandeler}
          >
            Home
          </Link>
          <Link
            to="about/"
            className="nav-link w-nav-link w--nav-link-open"
            style={{ maxWidth: "1200px" }}
            onClick={DopenHandeler}
          >
            About
          </Link>
          <Link
            to="news/"
            className="nav-link w-nav-link w--nav-link-open"
            style={{ maxWidth: "1200px" }}
            onClick={DopenHandeler}
          >
            News
          </Link>
          <Link
            to="contact/"
            className="nav-link w-nav-link w--nav-link-open"
            style={{ maxWidth: "1200px" }}
            onClick={DopenHandeler}
          >
            Contact
          </Link>


       
          {/* <div
            data-hover="true"
            data-delay="0"
            className="dropdown w-dropdown w--nav-dropdown-open"
            style={{ maxWidth: "1200px" }}
          >
            <div
              className="dropdown-toggle w-dropdown-toggle w--nav-dropdown-toggle-open"
              id="w-dropdown-toggle-0"
              aria-controls="w-dropdown-list-0"
              aria-haspopup="menu"
              aria-expanded="false"
              role="button"
              tabindex="0"
            >
              <div
                className="dropdown-arrow w-icon-dropdown-toggle"
                aria-hidden="true"
              ></div>
              <div>Pages</div>
            </div>
            <nav
              className="dropdown-list w-dropdown-list w--nav-dropdown-list-open"
              id="w-dropdown-list-0"
              aria-labelledby="w-dropdown-toggle-0"
            >
              <a
                href="/news"
                className="dropdown-link w-dropdown-link"
                tabindex="0"
              >
                News
              </a>
              <a
                href="/plans-eccomerce"
                className="dropdown-link w-dropdown-link"
                tabindex="0"
              >
                Plans Eccomerce
              </a>
              <a
                href="/legal"
                className="dropdown-link w-dropdown-link"
                tabindex="0"
              >
                Legal
              </a>

              <a
                href="/template-info/licensing"
                className="dropdown-link w-dropdown-link"
                tabindex="0"
              >
                Licensing
              </a>
            </nav>
          </div> */}
        </nav>
      </div>: null }
    </div>
  );
}

export default Navbar;
