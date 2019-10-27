import React from "react";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h3 className="display-3 f-logo">
        <span className="text-danger">404</span> Page Not Found
      </h3>
      <p className="lead">Sorry, that page does not exits</p>
    </div>
  );
};

export default NotFound;
