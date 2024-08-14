import React from "react";
import "../styles/More.css";
import Person from "../components/Person";
import mingu from "../assets/mingu.png";
import tawoo from "../assets/tawoo.png";
import heejin from "../assets/heejin.png";
import jaeryung from "../assets/jaeryung2.png";
import yeonhee from "../assets/yeonhee.png";

const More = () => {
  return (
    <div className="more-backimage">
      <div className="more-teambox">
        <div className="more-teamtext">Team AZA</div>
      </div>
      <div className="more-bigbox">
        <Person
          pphoto={mingu}
          pname={"강민규"}
          pgit={"mingu0215(git)"}
          pschool={"성균관대"}
          pmajor={"데이터사이언스"}
          pemail={"mingu0215@g.skku.edu"}
          pmbti={"INFJ"}
        />
        <Person
          pphoto={jaeryung}
          pname={"김재령"}
          pgit={"JaelyungKim(git)"}
          pschool={"한국외대"}
          pmajor={"데이터사이언스"}
          pemail={"jr2950499@naver.com"}
          pmbti={"ENTJ"}
        />
        <Person
          pphoto={tawoo}
          pname={"김태우"}
          pgit={"kimEHwoo(git)"}
          pschool={"인하대"}
          pmajor={"전자공학과"}
          pemail={"kimtaewoo721@gmail.com"}
          pmbti={"ESFP"}
        />
        <br></br>
        <Person
          pphoto={heejin}
          pname={"박희진"}
          pgit={"gmlwlsdl(git)"}
          pschool={"경기대"}
          pmajor={"컴퓨터공학"}
          pemail={"heejin094@kyonggi.ac.kr"}
          pmbti={"ISTJ"}
        />
        <Person
          pphoto={yeonhee}
          pname={"오연희"}
          pgit={"o00o98(git)"}
          pschool={"인하대"}
          pmajor={"컴퓨터공학"}
          pemail={"o00o98@naver.com"}
          pmbti={"ENTP"}
        />
      </div>
    </div>
  );
};

export default More;
