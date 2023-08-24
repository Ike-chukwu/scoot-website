import React from "react";
import "./SignUp.scss";
import apple from "../../assets/icons/app-store.svg";
import playstore from "../../assets/icons/google-play.svg";
import "./SignUp.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="sign-up">
      <div className="inner">
        <h1>
          Sign up and <br /> Scoot off today
        </h1>
        <div className="btn-row">
          <Link to="https://www.apple.com/app-store/">
            <img src={apple} alt="" />
          </Link>
          <Link to="https://play.google.com/store/games?device=windows">
            <img src={playstore} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
