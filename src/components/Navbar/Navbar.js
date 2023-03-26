import React from "react";

function Navbar() {
  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      class="nav-component w-nav"
    >
      <div class="nav-container w-container">
        <div
          id="w-node-b67e7efd-255e-321b-f527-21631dbc0c72-1dbc0c70"
          class="first-element"
        >
          <a href="/" aria-current="page" class="brand w-nav-brand w--current">
            <img
              src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e255fe1633d2ee7700b8de_logo.png"
              loading="lazy"
              width="100"
              alt=""
            />
          </a>
          <div class="shrink-item">
            <div class="flex-center">
              <nav role="navigation" class="nav-menu w-nav-menu">
                <a
                  href="/"
                  aria-current="page"
                  class="nav-link w-nav-link w--current"
                >
                  Home
                </a>
                <a href="/about" class="nav-link w-nav-link">
                  About
                </a>
                <a href="/about" class="nav-link w-nav-link">
                  News
                </a>
                {/* <div
                  data-hover="true"
                  data-delay="0"
                  class="dropdown w-dropdown"
                >
                  <div class="dropdown-toggle w-dropdown-toggle">
                    <div class="dropdown-arrow w-icon-dropdown-toggle"></div>
                    <div>Pages</div>
                  </div>
                  <nav class="dropdown-list w-dropdown-list">
                    <a href="/news" class="dropdown-link w-dropdown-link">
                      News
                    </a>
                    <a
                      href="/plans-eccomerce"
                      class="dropdown-link w-dropdown-link"
                    >
                      Plans Eccomerce
                    </a>
                    <a href="/legal" class="dropdown-link w-dropdown-link">
                      Legal
                    </a>
                    <a
                      href="/template-info/style-guide"
                      class="dropdown-link w-dropdown-link"
                    >
                      Style Guide
                    </a>
                    <a
                      href="/template-info/licensing"
                      class="dropdown-link w-dropdown-link"
                    >
                      Licensing
                    </a>
                  </nav>
                </div> */}
                <a href="/contact" class="nav-link w-nav-link">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div class="flex-nav-button">
          <a href="#" class="button-line-link hide-mobile w-inline-block">
            <div>Join US</div>
          </a>
          <a
            href="/contact"
            class="button-arrow-link hide-landscape w-inline-block"
          >
            <div class="button-label">
              <div class="label-button">Get in Touch</div>
              <div class="arrow-wrapper">
                <img
                  src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e25424962bf135c7305306_next.svg"
                  loading="lazy"
                  alt=""
                  class="icon-arrow"
                />
              </div>
            </div>
          </a>
          <div class="menu-button w-nav-button">
            <img
              src="https://assets.website-files.com/63d8fb6b7158592f02c9f7cc/63e22d96dd964abe10b3e208_icon-menu.svg"
              loading="lazy"
              width="30"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
