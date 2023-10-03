import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme, color }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

export default function CustomizedProgressBars({ color, percentage }) {
  // console.log(color);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress
        variant="determinate"
        value={percentage}
        color={color}
      />
    </Box>
  );
}
