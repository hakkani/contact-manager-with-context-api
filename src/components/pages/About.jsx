import React from "react";

const About = props => {
  return (
    <div className="about">
      <h3>{props.match.params.name}</h3>
      <h4 className="header-title">About Contact Manager</h4>
      <p className="lead">This is a simple contact manager application</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};

export default About;
