import React from "react";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";

const MobileNavMenu = () => {
  const onClickHandler = (e) => {
    const target = e.currentTarget;
    const parentEl = target.parentElement;
    if (
      parentEl?.classList.contains("menu-toggle") ||
      target.classList.contains("menu-toggle")
    ) {
      const element = target.classList.contains("icon") ? parentEl : target;
      const parent = getClosest(element, "li");
      const childNodes = parent.childNodes;
      const parentSiblings = getSiblings(parent);
      parentSiblings.forEach((sibling) => {
        const sibChildNodes = sibling.childNodes;
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child, 1000);
          }
        });
      });
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child, 1000);
        }
      });
    }
  };
  return (
    <nav className="site-mobile-menu">
      <ul>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/"}>
            <span className="menu-text">HOME</span>
          </NavLink>
          {/* <span className="menu-toggle" onClick={onClickHandler}><i className="icon fa fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/home"}><span className="menu-text">Home</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-two"}><span className="menu-text">Home Two</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-three"}><span className="menu-text">Home Three</span></NavLink></li>
                    </ul> */}
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/about"}>
            <span className="menu-text">ABOUT US</span>
          </NavLink>
        </li>
        <li className="has-children">
          <NavLink to={process.env.PUBLIC_URL + "#"}>
            <span className="menu-text">OUR SERVICES </span>
          </NavLink>
          <span className="menu-toggle" onClick={onClickHandler}>
            <i className="far fa-angle-down"></i>
          </span>
          <ul className="sub-menu">
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/it-infrastructure"}>
                <span className="menu-text">IT INFRASTRUCTURE</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/enterprise-solutions"}>
                <span className="menu-text">ENTERPRISE SOLUTIONS</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/rental-services"}>
                <span className="menu-text">RENTAL SERVICES</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/managed-services"}>
                <span className="menu-text">MANAGED SERVICES</span>
              </NavLink>
            </li>
          </ul>
        </li>
        {/* <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Work</span></NavLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Work</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/work-details/1`}><span className="menu-text">Work Details</span></NavLink></li>
                    </ul>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span className="menu-text">Blog</span></NavLink>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span className="menu-text">Blog Grid</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/blog-classic"}><span className="menu-text">Blog Classic</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/blog-details/1`}><span className="menu-text">Blog Details</span></NavLink></li>
                    </ul>
                </li> */}
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/careers"}>
            <span className="menu-text">CAREERS</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/blogs"}>
            <span className="menu-text">BLOGS</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/contact"}>
            <span className="menu-text">CONTACT US</span>
          </NavLink>
        </li>
        <li>
          <a
            href={"https://support.gigahertzcomp.com/portal/en/signin"}
            target="_blank"
            rel="noreferrer"
          >
            <span className="menu-text">RAISE A TICKET</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
