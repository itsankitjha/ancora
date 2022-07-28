import { Box, Stack, Typography } from "@mui/material";
import Logo from "elements/Logo";
import MDButton from "elements/MDButton";
import React from "react";

const menuItems = ["Products", "Invest", "Community", "About"];

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        marginTop: "25px",
        alignItems: "center",
      }}
    >
      <Box>
        <Logo />
      </Box>
      <Box>
        <Stack direction="row" spacing={2}>
          {menuItems
            ? menuItems.map((menuItem) => {
                return (
                  <Typography variant="h6" component="h2">
                    {menuItem}
                  </Typography>
                );
              })
            : null}
        </Stack>
      </Box>
      <Box>
        <MDButton />
      </Box>
    </Box>
  );
};

export default Header;
