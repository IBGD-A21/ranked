import { Card, CardContent, CardHeader } from "@mui/material";
import { Star } from "@mui/icons-material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const tinkleStars = (rotate: number) =>
  keyframes({
    "0%": { transform: `rotate(-${rotate}deg)` },
    "50%": { transform: `rotate(${rotate}deg)` },
    "100%": { transform: `rotate(-${rotate}deg)` },
  });

const appear = (initialScale: number) =>
  keyframes({
    "0%": { transform: `scale(${initialScale})` },
    "50%": { transform: `scale(${0.75})` },
    "75%": { transform: `scale(${1.15})` },
    "100%": { transform: `scale(${1})` },
  });

export const StyledCard = styled(Card)({
  display: "flex",
  alignItems: "center",
});

export const StyledCardHeader = styled(CardHeader)({
  padding: 0,
  ".MuiCardHeader-content": {
    minWidth: "150px",
    textAlign: "left",
  },
});

export const StyledCardContent = styled(CardContent)({
  padding: 0,
  order: 1,
});

export const StyledStarIcon = styled(Star)({
  color: "#f1e22d",
  animation: `${tinkleStars(10)} 1s ease-in-out infinite`,
  transformOrigin: "bottom center",
  path: {
    animation: `${appear(1.5)} 0.5s`,
    transformOrigin: "center",
  },
});
