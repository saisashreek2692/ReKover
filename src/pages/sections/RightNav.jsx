import React from "react";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';

const RightNav = () => {
  return (
    <div>
      <Stack direction="row" spacing={6}>
        <Button href="/login/">Get Started</Button>
        <Button variant="contained" href="/register/">Sign Up</Button>
      </Stack>
    </div>
  );
};

export default RightNav;
