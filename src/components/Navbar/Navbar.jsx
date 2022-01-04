import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/images/home.svg";
import AboutIcon from "../../assets/images/info.svg";
import ScheduleIcon from "../../assets/images/schedule.svg";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__content">
          <Link to="/event-schedule">
            <img
              className="navbar__icon"
              src={ScheduleIcon}
              alt="schedule icon"
            />
          </Link>
          <span className="navbar__title">SCHEDULE</span>
        </div>
        <div className="navbar__content">
          <Link to="/">
            <img className="navbar__icon" src={HomeIcon} alt="home icon" />
          </Link>
          <span className="navbar__title">HOME</span>
        </div>

        <div className="navbar__content">
          <Link to="/our-story">
            <img className="navbar__icon" src={AboutIcon} alt="about icon" />
          </Link>
          <span className="navbar__title">ABOUT</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
