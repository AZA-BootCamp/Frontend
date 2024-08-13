import React from "react";
import "../styles/More.css";
import Person from "../components/Person";
import king from "../assets/king.png";

const More = () => {
  return (
    <div className="more-backimage">
      <div className="more-teambox">
        <div className="more-teamtext">Team AZA</div>
      </div>
      <div className="more-bigbox">
        <Person
          pphoto={king}
          pname={"김태우"}
          pgit={"github"}
          pschool={"인하대학교"}
          pmajor={"전자공학과"}
          pphone={"010-1234-5678"}
          pblog={"블로그 모름"}
        />
        <Person
          pphoto={king}
          pname={"김태우"}
          pgit={"github"}
          pschool={"인하대학교"}
          pmajor={"전자공학과"}
          pphone={"010-1234-5678"}
          pblog={"블로그 모름"}
        />
        <Person
          pphoto={king}
          pname={"김태우"}
          pgit={"github"}
          pschool={"인하대학교"}
          pmajor={"전자공학과"}
          pphone={"010-1234-5678"}
          pblog={"블로그 모름"}
        />
        <br></br>
        <Person
          pphoto={king}
          pname={"김태우"}
          pgit={"github"}
          pschool={"인하대학교"}
          pmajor={"전자공학과"}
          pphone={"010-1234-5678"}
          pblog={"블로그 모름"}
        />
        <Person
          pphoto={king}
          pname={"김태우"}
          pgit={"github"}
          pschool={"인하대학교"}
          pmajor={"전자공학과"}
          pphone={"010-1234-5678"}
          pblog={"블로그 모름"}
        />
      </div>
    </div>
  );
};

export default More;
