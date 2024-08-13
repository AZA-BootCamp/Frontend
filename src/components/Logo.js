import React from "react";
import "../styles/Logo.css";

const Logo = ({ logo }) => {
  return (
    <div className="aboutAZA-logoc">
      <p className="aboutAZA-logotext">{logo}</p>
    </div>
  );
};

export default Logo;
