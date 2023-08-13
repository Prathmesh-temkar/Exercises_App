import React, { useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { color, motion } from "framer-motion";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  const boxRef = useRef(null);
  return (
    <div>
      <div
        style={{
          height: "600px",
          padding: "10px",
          display: "flex",
          width: "100%",
          overflowX: "scroll",
        }}
        ref={boxRef}
      >
        <motion.div
          style={{
            height: "100px",
            padding: "10px",
            display: "inline-flex",
            gap: "10px",
          }}
          drag="x"
          dragConstraints={boxRef}
        >
          {data.map((item, index) => (
            <Box
              key={item.id || item}
              itemID={item.id || item}
              title={item.id || item}
              m="0 40px"
            >
              {isBodyParts ? (
                <BodyPart
                  item={item}
                  bodyPart={bodyPart}
                  setBodyPart={setBodyPart}
                />
              ) : (
                <ExerciseCard key={item.id || item} exercise={item} />
              )}
            </Box>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScrollbar;
