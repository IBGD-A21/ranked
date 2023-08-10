import React from "react";
import {
  Avatar,
  CardActions,
  IconButton
} from "@mui/material";
import { stringAvatar } from "../../utils";
import { MemberCardProps } from "./types";
import { Add, Remove } from "@mui/icons-material";
import { StyledCard, StyledCardContent, StyledCardHeader, StyledStarIcon } from "./styles";

const MemberCard = (props: MemberCardProps) => {
  const {
    name = "Lorem Ipsum",
    stars
  } = props;

  const [_stars, setStars] = React.useState(stars);

  const renderStars = () => [...Array(_stars)].map((_, i) => <StyledStarIcon key={i} />);

  const handleStarChange = (buttonState: "add" | "remove") => {
    setStars(prev => {
      if (buttonState === "add") return prev + 1;
      if (buttonState === "remove"  && prev > 1) return prev - 1;
      return 0;
    });
  };

  return (
    <>
      <StyledCard>
        <StyledCardHeader
          avatar={<Avatar {...stringAvatar(name)} />}
          title={name}
        />

        <StyledCardContent>{renderStars()}</StyledCardContent>

        <CardActions>
          <IconButton
            size="small"
            color="primary"
            onClick={(_) => handleStarChange("add")}
          >
            <Add />
          </IconButton>
          <IconButton
            size="small"
            color="primary"
            onClick={(_) => handleStarChange("remove")}
          >
            <Remove />
          </IconButton>
        </CardActions>

      </StyledCard>
    </>
  );
};

export default MemberCard;
