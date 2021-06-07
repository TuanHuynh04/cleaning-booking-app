import React, { useState } from "react";
import styled from "styled-components";
import { BookingStep1 } from "../../containers";
import { BookingStep2 } from "../../containers/BookingStep2";
import { BookingStep3 } from "../../containers/BookingStep3";

const BookingScreenStyles = styled.div`
    position: relative;
    background-color: #5c4db1;
    color: #fff;
    min-width: 100vw;
    min-height: 100vh;
    .label_booking{
        position: absolute;
        top: 5%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .label_booking h5{
        font-weight: bold;
        letter-spacing: 1px;
    }

`;

export const BookingScreen = () => {
  const [step1State, setStep1State] = useState(true);
  const [step2State, setStep2State] = useState(false);
  const [step3State, setStep3State] = useState(false);

  const nextStep2 = () => {
    setStep1State(false);
    setStep2State(true)
  }
  const nextStep3 = () => {
    setStep2State(false);
    setStep3State(true)
  }

  const backStep1 = () => {
    setStep1State(true);
    setStep2State(false)
  }
  const backStep2 = () => {
    setStep2State(true);
    setStep3State(false)
  }
  return (
    <BookingScreenStyles>
      <div className="label_booking">
        <h5>Booking a service</h5>
      </div>
      <div hidden={!step1State}>
        <BookingStep1 next={nextStep2} />

      </div>
      <div hidden={!step2State}>
        <BookingStep2 back={backStep1} next={nextStep3} />

      </div>
      <div hidden={!step3State}>
        <BookingStep3 back={backStep2} next={nextStep3} />

      </div>
    </BookingScreenStyles>
  );
};
// #5C4DB1
