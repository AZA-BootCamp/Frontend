import React from "react";
import "../styles/Person.css";

const Person = ({ pphoto, pname, pgit, pshchool, pmajor, pphone, pblog }) => {
  return (
    <div className="more-pbox">
      <div className="more-teamimage">
        <img src={pphoto} style={{ width: "201px", height: "172px" }}></img>
      </div>
      <div className="more-teampartition"></div>
      <div className="more-textbox" style={{ gap: "15px" }}>
        <div>
          <div className="more-textleft">{pname}</div>
          <div className="more-textleft">{pshchool}</div>
          <p className="more-textleft">{pmajor}</p>
          <p className="more-textright">{pgit}</p>
          <p className="more-textright">{pblog}</p>
          <p className="more-textright">{pphone}</p>
        </div>
      </div>
    </div>
  );
};

export default Person;
