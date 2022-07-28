import { Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const footerData = [
  {
    head: "Early Access",
    text1: "You’ll be priorities from",
    text2: "the pool of millioins",
    num: "01",
  },
  {
    head: "Zero Brokerage",
    text1: "You’ll be priorities from ",
    text2: "the pool of millioins",
    num: "02",
  },
  {
    head: "Zero Processing charges",
    text1: "You’ll be priorities from",
    text2: "the pool of millioins",
    num: "03",
  },
];

const Footer = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ alignItems: "center" }}>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              textTransform: "unset",
              fontWeight: 600,
              textALign: "center",
              color: "#2C5F52",
            }}
          >
            <br />
            Signup Now & Get
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ alignItems: "center" }}>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            width: "80%",
            margin: "auto",
            marginTop: "25px",
            marginBottom: "50px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          {footerData.map((item) => {
            return (
              <Stack
                direction="row"
                spacing={1.5}
                sx={{
                  textAlign: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h2"
                    sx={{
                      textTransform: "unset",
                      fontWeight: 500,
                      textALign: "center",
                      fontFamily: "DM Serif Display",
                      color: "#000",
                    }}
                  >
                    {item.num}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    textAlign: "left",
                    width: "80%",
                    margin: "auto",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      textTransform: "unset",
                      fontWeight: 500,
                      textALign: "center",
                      fontFamily: "DM Serif Display",
                      color: "#000",
                    }}
                  >
                    {item.head}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="h2"
                    sx={{
                      textTransform: "unset",
                      fontWeight: 500,
                      fontSize: "0.7",
                      textALign: "center",
                      color: "#000",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.text1}
                    <br /> {item.text2}
                  </Typography>
                </Box>
              </Stack>
            );
          })}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
