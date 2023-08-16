import React from "react";
import {
  Avatar,
  Box,
  CardActions,
  IconButton,
  Typography
} from "@mui/material";
import { stringAvatar } from "../../utils";
import { MemberCardProps } from "./types";
import { Add, Remove } from "@mui/icons-material";
import { StyledCard, StyledCardContent, StyledCardHeader, StyledStarIcon } from "./styles";

const MemberCard = (props: MemberCardProps) => {
  const {
    name = "Lorem Ipsum",
    id,
    onStarChanged,
  } = props;
  let { stars } = props;

  const renderStars = () => [...Array(stars)].map((_, i) => <StyledStarIcon key={i} />);

  const handleStarChange = (buttonState: "add" | "remove") => {
    if (buttonState === "add") stars += 1;
    if (buttonState === "remove" && stars > 1) stars -= 1;

    onStarChanged({ stars, id });
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
            onClick={() => handleStarChange("add")}
          >
            <Add />
          </IconButton>
          <IconButton
            size="small"
            color="primary"
            onClick={() => handleStarChange("remove")}
          >
            <Remove />
          </IconButton>

          <Box>
            <Typography variant="caption">{stars}</Typography>
          </Box>
        </CardActions>

      </StyledCard>
    </>
  );
};

export default MemberCard;
