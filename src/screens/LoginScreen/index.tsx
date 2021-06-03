import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import HomeCleanSVG from "../../assets/images/HomeClean.svg";

const LoginScreenStyles = styled.div`
  background-color: #5c4db1;
  color: #fff;
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 50px;
  position: relative;
  h1,
  h2 {
    font-weight: 700;
    text-align: center;
  }

  img {
    left: 0;
    width: 100%;
    object-fit: contain;
  }

  .google-sigin {
    position: absolute;
    bottom: 3%;
    left: 0;
    button {
      border: none;
      outline: none;
      padding: 10px 50px;
      border-radius: 10px;
    }

    button:hover {
      color: #5c4db1;
    }
  }
`;

export const LoginScreen = () => {
  const history = useHistory();
  return (
    <LoginScreenStyles>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div>
              <h1>Clean Home</h1>
            </div>
            <div>
              <h2>Clean Life</h2>
            </div>

            <div className="text-center mt-3">
              <span>Book Cleaners at the Comfort of your home</span>
            </div>
            <div>
              <img src={HomeCleanSVG} alt="home-cleaner" />
            </div>
            <div className="google-sigin text-center w-100">
              <button onClick={() => history.push("/booking")}>Sign in with Google</button>
            </div>
          </div>
        </div>
      </div>
    </LoginScreenStyles>
  );
};
