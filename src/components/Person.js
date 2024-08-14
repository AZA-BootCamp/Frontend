import React from "react";
import "../styles/Person.css";

const Person = ({ pphoto, pname, pgit, pschool, pmajor, pmbti, pemail }) => {
  return (
    <div className="more-pbox">
      <div className="more-teamimage">
        <img src={pphoto} style={{ width: "201px", height: "172px" }}></img>
      </div>
      <div className="more-teampartition"></div>
      <div>
        <p className="more-textleft1">{pname}</p>
        <p className="more-textleft2">{pschool}</p>
        <p className="more-textleft3">{pmajor}</p>
      </div>
      <div>
        <p className="more-textright1">{pgit}</p>
        <p className="more-textright2">{pemail}</p>
        <p className="more-textright3">{pmbti}</p>
      </div>
    </div>
  );
};

export default Person;
