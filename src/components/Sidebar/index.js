import React from "react";
import { Link } from "react-router-dom";

// import styles
import styles from "./Sidebar.module.css";

// import assets
import pic from "../../img/personal-pic.jpg";

export default function() {
  return (
    <div className={styles.Sidebar}>
      <nav>
        <div className="nav_pic">
          <img src={pic} alt="" />
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">ABOUT</Link>
          </li>
          <li>
            <Link to="/experience">EXPERIENCE</Link>
          </li>
          <li>
            <Link to="/education">EDUCATION</Link>
          </li>
          <li>
            <Link to="/skills">SKILLS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
