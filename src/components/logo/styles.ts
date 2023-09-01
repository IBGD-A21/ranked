import { Box, styled } from "@mui/material";
import { glowNeonFilter } from "../../utils/animations";

export const StyledIconContainer = styled(Box)({
  svg: {
    // animation: `${glowNeonFilter()} 12s infinite`,
    fill: "white",
    stroke: "#666",
    "stroke-width": 5,
    "stroke-linecap": "round",
    path: {
      fill: "white",
    },
  },
});
