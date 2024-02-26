import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const LeftNav = () => {
  return (
    <div>
      <Stack direction="row" spacing={28}>
        <Button href="/" noWrap>ReKover</Button>
        <Stack direction="row" spacing={4}>
          <Button href="/">About</Button>
          <Button href="/">Features</Button>
          <Button href="/">Pricing</Button>
          <Button href="/">Team</Button>
          <Button href="/">News Letter</Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default LeftNav;
