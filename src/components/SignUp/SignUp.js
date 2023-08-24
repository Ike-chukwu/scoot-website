import React from "react";
import "./SignUp.scss";
import apple from "../../assets/icons/app-store.svg";
import playstore from "../../assets/icons/google-play.svg";
import "./SignUp.scss";
import Reveal from '../../components/Reveal/Reveal'

const SignUp = () => {
  return (
    <Reveal>
      <section className="sign-up">
        <div className="inner">
          <h1>
            Sign up and <br /> Scoot off today
          </h1>
          <div className="btn-row">
            <img src={apple} alt="" />
            <img src={playstore} alt="" />
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default SignUp;
