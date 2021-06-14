import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import HomeCleanSVG from "../../assets/images/HomeClean.svg";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import firebase from "firebase";
import GoogleIcon from "../../assets/svg/google.svg";
import HomeLogin from "../../assets/images/Home-login.svg";

const LoginScreenStyles = styled.div`
  background-color: #5c4db1;
  color: #fff;
  min-width: 100vw;
  min-height: 100vh;
  padding-top: 50px;
  position: relative;
  h1,
  h2 {
    font-weight: bold;
    text-align: center;
    font-family: sans-serif;
  }

  span{
    font-size:16px;
    font-family: sans-serif;
    letter-spacing:1px;
  }

  img {
    left: 0;
    width: 100%;
    object-fit: contain;
  }
  
  .home-login{
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .google-sign-in {
    position: absolute;
    bottom: 0;
    left: 0;
    button {
      border: 1px solid #b1a6f0;
      background:#fff;
      color:#b1a6f0;
      outline: none;
      padding: 20px 20px;
      transition: 0.5s;
    }

    button:hover {
      border: none;
      background:#b1a6f0 ;
      color: #fff;
    }
  }
`;

export const LoginScreen = () => {
  const history = useHistory();
  const [isLoginState, setIsLoginState] = useState(false);
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
              <span>Book Cleaners at the Comfort of your home!</span>
            </div>
            <div>
              <img src={HomeLogin} alt="" className="home-login" />
            </div>
            <div className="google-sign-in text-center w-100">
              <FirebaseAuthConsumer>
                {({ isSignedIn, user, providerId }) => {
                  return !isSignedIn ? (
                    <button
                      className="d-flex flex-wrap flex-row text-center w-100 justify-content-center"
                      onClick={() => {
                        const googleAuthProvider =
                          new firebase.auth.GoogleAuthProvider();
                        firebase.auth().signInWithPopup(googleAuthProvider);
                      }}
                    >
                      Sign in with Google{" "}
                      <span>
                        <img
                          src={GoogleIcon}
                          alt="google"
                          width="20"
                          height="20"
                        />
                      </span>
                    </button>
                  ) : (
                    <div className="d-flex justify-content-center flex-row align-items-center mb-3">
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          marginRight: "1rem",
                        }}
                        src={user.photoURL}
                        alt=""
                      />
                      <span>{user.displayName}</span>
                    </div>
                  );
                }}
              </FirebaseAuthConsumer>
            </div>
          </div>
        </div>
      </div>
    </LoginScreenStyles>
  );
};
