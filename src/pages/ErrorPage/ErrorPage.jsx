import React from "react";
import "./ErrorPage.scss";
import sadNote from "../../assets/images/sad-note.svg";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__heading">
        Oops. Looks like this page doesnt exist <br />
        <span className="error-page__heading--span">404</span>
      </h1>
      <h4>Try one of our mock IDs on the end of the URL:</h4>
      <p>/6bb8ffe8-6e5e-4abc-be7f-b05b749849cf</p>
      <p>/5101a840-5606-4097-9b66-a567213ae915</p>
      <p>/5354a913-2375-1357-9y37-a522213ae315</p>
      <img className="error-page__icon" src={sadNote} alt="sad musical note" />

      <a className="error-page__button" href="//oae.co.uk/">
        Back to OAE website
      </a>
    </div>
  );
};

export default ErrorPage;
