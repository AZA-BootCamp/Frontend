import React from "react";
import image from "../assets/main.png";
import "../styles/About.css";
import AZA from "../components/AZA";
import Question from "../components/Question";
import Arrow from "../assets/arrow.svg";
import Logo from "../components/Logo";

const About = () => {
  return (
    <div>
      <div>
        <div className="aboutAZA-backimage">
          <div className="containerq">
            <Question
              text={"해외 쇼핑몰 의류가 핏이 안 맞는 경우가 있으셨나요?"}
            />
            <Question
              text={"해외 쇼핑몰사이트의 사이즈 가이드가 불편하셨나요?"}
            />
            <Question text={"번거로운 반품 및 교환을 줄이고 싶으신가요?"} />
          </div>
          <img
            src={Arrow}
            style={{ position: "absolute", top: "223px", left: "1000px" }}
          />
          <div>
            <Logo logo={"AZA"} />
          </div>
          <div>
            <p className="aboutAZA-logobottomtext">
              AI기반 맞춤형
              <br></br>의류 추천 서비스
            </p>
          </div>
          <div className="aboutAZA-benecontainer"></div>
          <div className="aboutAZA-beneshadfir"></div>
          <div className="aboutAZA-fbc"></div>
          <p className="aboutAZA-fbtext">
            쉬운 <br></br>신체 치수 측정 <br></br>서비스 제공
          </p>
          <p className="aboutAZA-sbtext">
            해외 의류<br></br> 사이즈 추천<br></br> 서비스 제공
          </p>

          <p className="aboutAZA-tbtext">
            교환 및 반품<br></br>사례 감소
          </p>

          <div className="aboutAZA-beneshadlast"></div>
          <div className="aboutAZA-sbc"></div>
          <div className="aboutAZA-tbc"></div>
        </div>
      </div>
    </div>
  );
};
// 1035 1534
export default About;
