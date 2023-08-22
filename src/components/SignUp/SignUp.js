import React from "react";
import "./SignUp.scss";
import apple from "../../assets/icons/app-store.svg";
import playstore from "../../assets/icons/google-play.svg";
import "./SignUp.scss";

const SignUp = () => {
  return (
    <section className="sign-up">
      <h1>Sign up and <br /> Scoot off today</h1>
      <div className="btn-row">
        <img src={apple} alt="" />
        <img src={playstore} alt="" />
      </div>
    </section>
  );
};

export default SignUp;
