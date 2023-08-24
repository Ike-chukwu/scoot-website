import React from "react";
import "./SignUp.scss";
import apple from "../../assets/icons/app-store.svg";
import playstore from "../../assets/icons/google-play.svg";
import "./SignUp.scss";
import Reveal from "../../components/Reveal/Reveal";
import { Link } from "react-router-dom";


const SignUp = () => {
  return (
    <Reveal>
      <section className="sign-up">
        <div className="inner">
          <h1>
            Sign up and <br /> Scoot off today
          </h1>
          <div className="btn-row">
            <Link
              to="https://www.apple.com/app-store/"
              className="img"
            >
              <img src={apple} alt="" />
            </Link>
            <Link
              to="https://play.google.com/store/games?hl=en&gl=US"
              className="img"
            >
              <img src={playstore} alt="" />
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default SignUp;
