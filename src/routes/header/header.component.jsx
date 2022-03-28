import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as BccLogo } from "../../assets/shopping-bag-svgrepo-com.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <Link className="logo-container" to="/">
          <BccLogo className="logo" />
          <div className="name">burg clothing co.</div>
        </Link>
        <div className="navigation-container">
          <Link className="nav-link" to="/sign-in">
            sign in
          </Link>
          <Link className="nav-link" to="/shop">
            shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
