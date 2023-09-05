import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/all" className={classes.link}>
                All Meet ups
              </Link>
            </li>
            <li>
              <Link to="/new" className={classes.link}>
                Add Meet up
              </Link>
            </li>
            <li>
              <Link to="/fav" className={classes.link}>
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
