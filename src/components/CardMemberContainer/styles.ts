import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";

export const StyledCard = styled(Card)({
  padding: "2rem 3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: '100%',
  maxWidth: '1000px',
});

export const StyledBox = styled(Box)({
  position: "relative",
  minWidth: "750px",
  height: "80vh",
  overflowY: "auto",

});
