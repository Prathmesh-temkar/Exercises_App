import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
import { Box, Stack, Typography } from "@mui/material";

const SimilarExercises = ({ targetMuscleExercises, equimentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">
        Exercises that target the same muscle group:
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3">
        Exercises that uses the same Equipment:
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equimentExercises.length ? (
          <HorizontalScrollbar data={equimentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
