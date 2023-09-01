import React from "react";
import { SvgIconProps } from "@mui/material";
import { StyledIconContainer } from "./styles";

const LogoA21: React.FunctionComponent<SvgIconProps> = (props) => {
  const path = "M279.75,149.57l20.25,0L154.3,0H139.7V55L86.15,0H71.55V58.47L14.6,0H0V149.93H14.6V21.2l57,58.48v70.25h14.6V94.67l53.55,55v.29h14.6V91.17l57.22,58.32,20.4-.05L154.3,70V21.2Zm-140-21.13-53.55-55V21.2l53.55,55Z";

  return (
    <StyledIconContainer width={32} data-testid="oa" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 149.93">
        {/* TODO: Validate custom A21 Logo */}
        {/* <defs>
          <radialGradient id="smallGradient" fy="90%">
            <stop offset="0%" stopColor="#0c97f6"></stop>
            <stop offset="100%" stopColor="#0baae2"></stop>
            <animate attributeName="fy" dur="500ms" from="90%" to="0%" repeatCount="indefinite" />
          </radialGradient>
          <radialGradient id="largeGradient" fy="90%">
            <stop offset="0%" stopColor="#03dcd2"></stop>
            <stop offset="100%" stopColor="#0cf659"></stop>
            <animate attributeName="fy" dur="500ms" from="90%" to="0%" repeatCount="indefinite" />
          </radialGradient>
        </defs> */}
        {/* <defs>
          <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#0c97f6">
              <animate
                attributeName="stop-color"
                values="#0c97f6; #0cf659; #0c97f6"
                dur="1s"
                repeatCount="indefinite"
              ></animate>
            </stop>

            <stop offset="100%" stopColor="#0cf659">
              <animate
                attributeName="stop-color"
                values="#0cf659; #0bd484; #0cf659"
                dur="1s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs> */}

        <path d={path} />
        {/* <path fill="url('#smallGradient')" d={path} /> */}
        {/* <path fill="url('#logo-gradient')" d={path} /> */}
      </svg>
    </StyledIconContainer>
  );
};

export default LogoA21;

// import StarIcon from "./star.svg";

// <SvgIcon component={StarIcon} viewBox="0 0 600 476.6" />;
