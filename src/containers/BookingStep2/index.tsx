import React, { useState } from 'react';
import styled from 'styled-components';
import { Checkbox, FormControlLabel, FormGroup, Input } from '@material-ui/core';

const BookingStep2Styles = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  content: "";
  background-color: #fff;
  color: black;
  border-radius: 40px 40px 0 0;
  min-width: 100%;
  min-height: 90%;
  padding: 1rem 5%;
  .home_service label {
    color: black;
    font-size: 14px;
  }
`;
export const BookingStep2 = () => {
    const [addressState, setAddressState] = useState("");
    return (
        <BookingStep2Styles>
            <div>
                <Input value={addressState} onChange={e => setAddressState(e.target.value)} placeholder="Enter your address" />
            </div>
            <div>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={true} name="=kitchen" />}
                        label="Kitchen"
                    />
                    <FormControlLabel
                        control={<Checkbox name="dinning_room" />}
                        label="Dinning Room"
                    />
                    <FormControlLabel
                        control={<Checkbox name="living_room" />}
                        label="Living Room"
                    />
                </FormGroup>
            </div>

        </BookingStep2Styles>
    )
}
