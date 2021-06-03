import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox, FormControlLabel, FormGroup, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const BookingStep3Styles = styled.div`
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export const BookingStep3 = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <BookingStep3Styles>
      <div>
        <label>Choose additional services:</label>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={true} name="=window_cleaning" />}
            label="Window cleaning"
          />
          <FormControlLabel
            control={<Checkbox name="carpet_dry_cleaning" />}
            label="Carpet dry cleaning "
          />
          <FormControlLabel
            control={<Checkbox name="furniture_dry_cleaning" />}
            label="Furniture dry cleaning"
          />
          <FormControlLabel
            control={<Checkbox name="=wash_inside_fridge" />}
            label="Wash inside fridge"
          />
          <FormControlLabel
            control={<Checkbox name="wash_inside_oven/microwave" />}
            label="Wash inside oven/microwave"
          />
          <FormControlLabel
            control={<Checkbox name="dust_ceiling" />}
            label="Dust ceiling"
          />
          <FormControlLabel
            control={<Checkbox name="Wash_iron_and_put_up_curtains" />}
            label="Wash, iron and put up curtains"
          />
        </FormGroup>
      </div>
      <div>
        <label>Additional information:</label>
        <h6>
          If you want us to pay attention to some particular places in your
          home, please enter this information in the box
        </h6>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
              variant="outlined"
            />
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <Button style={{ padding: '0.5rem 3.5rem' }} variant="contained" color="primary">
            NEXT
          </Button>
        </div>
      </div>
    </BookingStep3Styles>
  );
};
