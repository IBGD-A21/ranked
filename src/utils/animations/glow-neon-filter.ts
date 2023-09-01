import { keyframes } from "@emotion/react";

export const glowNeonFilter = () =>
  keyframes({
    "20%": {
      "-webkit-filter": `drop-shadow(-0.75px 0px 6px #0c97f6)`,
      filter: `drop-shadow(-0.75px 0px 6px #0c97f6)`,
      stroke: "#0c97f6",
    },
    "40%": {
      "-webkit-filter": `drop-shadow(-0.75px 0px 6px #0bb6d4)`,
      filter: `drop-shadow(-0.75px 0px 6px #0bb6d4)`,
      stroke: "#0bb6d4",
    },
    "60%": {
      "-webkit-filter": `drop-shadow(-0.75px 0px 6px #00ebd1)`,
      filter: `drop-shadow(-0.75px 0px 6px #00ebd1)`,
      stroke: "#00ebd1",
    },
    "80%": {
      "-webkit-filter": `drop-shadow(-0.75px 0px 6px #0bd484)`,
      filter: `drop-shadow(-0.75px 0px 6px #0bd484)`,
      stroke: "#0bd484",
    },
    "100%": {
      "-webkit-filter": `drop-shadow(-0.75px 0px 6px #0cf659)`,
      filter: `drop-shadow(-0.75px 0px 6px #0cf659)`,
      stroke: "#0cf659",
    },
  });
