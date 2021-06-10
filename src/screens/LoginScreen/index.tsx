import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import HomeCleanSVG from "../../assets/images/HomeClean.svg";
import { FirebaseAuthConsumer } from "@react-firebase/auth";
import firebase from "firebase";
import GoogleIcon from "../../assets/svg/google.svg";

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
    bottom: 0;
    left: 0;
    button {
      border: none;
      outline: none;
      padding: 20px 20px;
    }

    button:hover {
      color: #5c4db1;
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
              <span>Book Cleaners at the Comfort of your home</span>
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div className="google-sigin text-center w-100">
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
