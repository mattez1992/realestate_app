import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../../assets/svg/exploreIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svg/personOutlineIcon.svg";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const matchRoute = (route) => {
    return route === location.pathname;
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={matchRoute("/") ? "2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                matchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={matchRoute("/offers") ? "2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                matchRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <ProfileIcon
              fill={matchRoute("/profile") ? "2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                matchRoute("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/signin")}>
            <ProfileIcon
              fill={matchRoute("/signin") ? "2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                matchRoute("/signin")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Sign in
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
