import React from "react";
import styled from "styled-components";
import { BookingStep1 } from "../../containers";

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
  return (
    <BookingScreenStyles>
        <div className="label_booking">
            <h5>Booking a service</h5>
        </div>
      <BookingStep1 />
    </BookingScreenStyles>
  );
};
// #5C4DB1
