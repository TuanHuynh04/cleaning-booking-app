import React, { useState } from "react";
import styled from "styled-components";
import RoomCleanSVG from "../../assets/images/RoomClean.svg";
import FullHouseCleanSVG from "../../assets/images/FullHouseClean.svg";

const BookingStep1Styles = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  content: "";
  background-color: #fff;
  border-radius: 40px 40px 0 0;
  min-width: 100%;
  min-height: 90%;
  .home_service label {
    color: black;
    font-size: 14px;
  }
`;

export const BookingStep1 = () => {
  const [roomCleanCheckState, setRoomCleanCheckState] = useState(false);
  const [fullHouseCleanCheckState, setFullHouseCleanCheckState] =
    useState(false);

  return (
    <BookingStep1Styles>
      <div className="home_service">
        <label>Selected Cleaning</label>
        {/* <div className="clean_service_img">
          <img src={RoomCleanSVG} alt="room_clean" />
          <img src={FullHouseCleanSVG} alt="full_house_clean" />
        </div>
        <div className="select_service">
          <input className="fullhouse_check"
            type="checkbox"
            checked={roomCleanCheckState}
            onChange={(e) => setRoomCleanCheckState(e.target.checked)}
          />
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={RoomCleanSVG} alt="room_clean" />
              <input
                className="fullhouse_check"
                type="checkbox"
                checked={roomCleanCheckState}
                onChange={(e) => setRoomCleanCheckState(e.target.checked)}
              />
            </div>
            <div className="col-6">
              <img src={FullHouseCleanSVG} alt="room_clean" />
              <input
                className="fullhouse_check"
                type="checkbox"
                checked={fullHouseCleanCheckState}
                onChange={(e) => setFullHouseCleanCheckState(e.target.checked)}
              />
            </div>
          </div>
        </div>
      </div>
    </BookingStep1Styles>
  );
};
