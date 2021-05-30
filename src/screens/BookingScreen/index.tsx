import { Button, Checkbox } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const BookingScreenStyles = styled.div`
  h1 {
    color: red;
  }
`;

export const BookingScreen = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
  
  return (
    <BookingScreenStyles>
      <h1>Booking Screen</h1>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Button variant="contained" color="secondary">
        Hằng Tháng
      </Button>
    </BookingScreenStyles>
  );
};
