import React, { useState } from "react";
import styled from "styled-components";
import RoomCleanSVG from "../../assets/images/RoomClean.svg";
import FullHouseCleanSVG from "../../assets/images/FullHouseClean.svg";
import { Checkbox, Button } from "@material-ui/core";
import { useHistory } from "react-router";

const BookingStep1Styles = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  content: "";
  background-color: #fff;
  color: black;
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
  const history = useHistory();
  return (
    <BookingStep1Styles>
      <div className="home_service">
        <h5 className="text-center" style={{ color: '#5c4db1', fontSize: '1rem', marginTop: '5px' }}>Selected Cleaning</h5>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
              <img src={RoomCleanSVG} alt="room_clean" />
              <span>Room</span>
              <Checkbox
                checked={roomCleanCheckState}
                onChange={(e) => {
                  if (e.target.checked === true) {
                    setFullHouseCleanCheckState(false);
                  }
                  setRoomCleanCheckState(e.target.checked)
                }}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />

            </div>
            <div className="col-12 d-flex flex-column align-items-center mt-5">
              <img src={FullHouseCleanSVG} alt="room_clean" />
              <span>Full House</span>
              <Checkbox
                checked={fullHouseCleanCheckState}
                onChange={(e) => {
                  if (e.target.checked === true) {
                    setRoomCleanCheckState(false);
                  }
                  setFullHouseCleanCheckState(e.target.checked)
                }}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <Button onClick={() => history.push("/booking/detail")} style={{ padding: '0.5rem 3.5rem' }} variant="contained" color="primary">NEXT</Button>
            </div>
          </div>
        </div>
      </div>
    </BookingStep1Styles>
  );
};
