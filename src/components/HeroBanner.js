import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroImage from "../assets/images/bannerfinal.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="40px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Checkout the most effective Exercises
      </Typography>
      <Button variant="contained" href="#exercises" color="error">
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{ opacity: "0.1", display: { lg: "block", xs: "none" } }}
        fontSize="200px"
        mt="40px"
      >
        Exercise
      </Typography>
      <img
        src={HeroImage}
        style={{ borderBottomLeftRadius: "40px" }}
        alt="banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
