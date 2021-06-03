import React, { useState } from "react";
import styled from "styled-components";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
  TextField,
  createStyles,
  makeStyles,
  Theme,
  Button,
} from "@material-ui/core";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  })
);

export const BookingStep2 = () => {
  const [addressState, setAddressState] = useState("");
  const classes = useStyles();
  return (
    <BookingStep2Styles>
      <div>
        <Input
          value={addressState}
          onChange={(e) => setAddressState(e.target.value)}
          placeholder="Enter your address"
        />
      </div>
      <div>
        <label>Choose a room:</label>
        <FormGroup row>
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
          <FormControlLabel
            control={<Checkbox name="=bed_room" />}
            label="Bed Room"
          />
          <FormControlLabel
            control={<Checkbox name="bath_room" />}
            label="Bath Room"
          />
          <FormControlLabel control={<Checkbox name="other" />} label="Other" />
        </FormGroup>
      </div>
      <div>
        <label>Choose date and time:</label>
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Button style={{ padding: '0.5rem 3.5rem' }} variant="contained" color="primary">
            NEXT
          </Button>
        </div>
      </div>
    </BookingStep2Styles>
  );
};
