import { Card, CardContent, CardHeader } from "@mui/material";
import { Star } from "@mui/icons-material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { StyledCardHeaderProps } from "./types";
import { Mapper } from "../../models/mapper.types";

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

const glow = (place: number) => {
  const mapColors: Mapper<number, string> = {
    0: "#ffb900",
    1: "#c6c6c6",
    2: "#ed8347",
  };
  return keyframes({
    from: { boxShadow: `0 0 10px 0 ${mapColors[place]}` },
    to: { boxShadow: `0 0 12px 0 ${mapColors[place]}` },
  });
};

const HEIGHT = 100;

export const StyledCard = styled(Card)((props: StyledCardHeaderProps) => {
  const { place, total } = props;

  const OFFSET_GAP = place * 1.5;
  const OFFSET_TOP = 0.75;

  return {
    padding: "0 1rem",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    width: "95%",
    left: "2.5%",
    minHeight: `${HEIGHT}px`,
    position: "absolute",
    top: `calc(${HEIGHT * place}px + ${OFFSET_GAP}rem + ${OFFSET_TOP}rem)`,
    transition: "top 250ms linear",
    zIndex: `${total - place}`,

    ...(place < 3 && {
      animation: `${glow(place)} 1s infinite alternate`,
    }),
  };
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
