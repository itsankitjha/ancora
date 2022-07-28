import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import MDButton from "elements/MDButton";
import React from "react";
import circle from "assets/img/circle.png";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ShowChartIcon from "@mui/icons-material/ShowChart";
// import "./style.css";

const Content = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          alignItems: "center",
          marginTop: "50px",
          justifyContent: "space-evenly",
        }}
      >
        <Grid item xs={5} sx={{}}>
          <Grid container>
            <Grid item xs={12}>
              <Box>
                <Stack direction="column" spacing={3}>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{ fontFamily: "DM Serif Display", fontSize: "2.6rem" }}
                  >
                    Unlock{" "}
                    <Box
                      style={{
                        marginLeft: "10px",
                        display: "inline",
                        padding: "5px 8px",
                        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='36' ry='36' stroke='%232C5F52FF' stroke-width='3' stroke-dasharray='7' stroke-dashoffset='63' stroke-linecap='butt'/%3e%3c/svg%3e")`,
                        borderRadius: "36px",
                        color: "green",
                        fontFamily: "DM Serif Display",
                      }}
                    >
                      <Typography
                        variant="h4"
                        component="h2"
                        style={{
                          display: "inline",
                          padding: "4px 46px",
                          borderRadius: "30px",
                          color: "#2C5F52",
                          fontFamily: "DM Serif Display",
                        }}
                      >
                        your
                      </Typography>
                    </Box>
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{ fontFamily: "DM Serif Display", fontSize: "2.6rem" }}
                  >
                    online growth
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{ fontFamily: "DM Serif Display", fontSize: "2.6rem" }}
                  >
                    Potential
                    <Box
                      style={{
                        marginLeft: "10px",
                        display: "inline",

                        padding: "5px 9px 10px 9px",
                        alignItems: "center",

                        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='36' ry='36' stroke='%232C5F52FF' stroke-width='3' stroke-dasharray='7' stroke-dashoffset='63' stroke-linecap='butt'/%3e%3c/svg%3e")`,
                        borderRadius: "36px",

                        fontFamily: "DM Serif Display",
                      }}
                    >
                      <Typography
                        variant="h4"
                        component="h2"
                        style={{
                          // height: "100px",
                          display: "inline",
                          background: "#2C5F52",
                          padding: "3px 40px",
                          borderRadius: "30px",
                          // width: "100px",
                          color: "white",
                          fontFamily: "DM Serif Display",
                          // textAlign: "center",
                          // lineHeight: "100px",
                        }}
                      >
                        Yes
                      </Typography>
                    </Box>
                  </Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "55%",
                      display: "flex",
                      // width: "2%",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        borderRadius: "110px",
                        padding: "10px 50px",
                        textTransform: "unset",
                        color: "#000",
                        height: "60px",
                        fontSize: "1.1rem",
                      }}
                    >
                      Our Product
                    </Button>
                    <Avatar
                      sx={{
                        marginLeft: "30px",
                        border: "2px dashed #2C5F52",
                        backgroundColor: "#E8EDEC",
                        height: "60px",
                        width: "60px",
                      }}
                    >
                      <PlayArrowRoundedIcon sx={{ color: "#2C5F52" }} />
                    </Avatar>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5} sx={{}}>
          <Box sx={{ position: "relative", marginTop: "20" }}>
            <Avatar
              sx={{
                margin: "auto",
                background:
                  "linear-gradient(136.52deg, rgba(255, 0, 122, 0.58) -56.15%, rgba(255, 168, 0, 0.37) 135.78%)",
                height: "340px",
                width: "340px",
              }}
            >
              <PlayArrowRoundedIcon sx={{ color: "#2C5F52" }} />
            </Avatar>

            <img
              src="https://ouch-cdn2.icons8.com/gvwSByMBnH6U80YBubiO7DE5RtGjfC3hClevmrRtzVE/rs:fit:476:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTI3/LzQxODFmMTUwLTBh/YjQtNDEwMi04YTA2/LWQwYmViNjVkYmFh/OC5wbmc.png"
              alt="Girl in a jacket"
              style={{ position: "absolute", top: 40, left: 70 }}
              width="290"
              height="290"
            ></img>
          </Box>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              margin: "auto",
              backgroundColor: "#FFC0A1",
              padding: "30px",
              borderRadius: "100px",
              outline: "2px dashed #2C5F52",
              outlineOffset: "15px",
            }}
          >
            <Stack direction="row" spacing={2}>
              <Typography sx={{ marginRight: "30px" }}>
                <Avatar sx={{ bgcolor: "black" }}>
                  <ShowChartIcon />
                </Avatar>
              </Typography>
              <Typography
                variant="caption"
                component="h2"
                sx={{ width: "300px" }}
              >
                Drive your money to
                <br /> work smarter than others
              </Typography>
              <Typography variant="caption" component="h2">
                A safe and secure invesment nedd guided aproach with real time
                analytics and risk analysis , we can help you to catch all at
                once.
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Content;
