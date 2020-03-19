import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div>
      <h1>Sidebar</h1>
      <ul>
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
        <li>
          <Link to="/interests">INTERESTS</Link>
        </li>
      </ul>
    </div>
  );
}
