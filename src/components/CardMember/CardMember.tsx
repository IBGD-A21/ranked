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
import { Mapper } from "../../models/mapper.types";
import { TotalContext } from "../../hooks/total.hook";

const MemberCard = (props: MemberCardProps) => {
  const {
    name = "Lorem Ipsum",
    id,
    place,
    onStarChanged,
  } = props;
  let { stars } = props;

  const total = React.useContext(TotalContext);

  const _place = place + 1;

  const renderStars = () => [...Array(stars)].map((_, i) => <StyledStarIcon key={i} />);

  const handleStarChange = (buttonState: "add" | "remove") => {
    if (buttonState === "add") stars += 1;
    if (buttonState === "remove" && stars > 0) stars -= 1;

    onStarChanged({ stars, id });
  };

  const renderPlace = () => {
    const mappedPlaces: Mapper<number, string> = {
      1: "🥇",
      2: "🥈",
      3: "🥉",
    };
    const mappedPlacesSuffix: Mapper<number, string> = {
      1: "st",
      2: "nd",
      3: "rd",
    };

    const placeSymbol = mappedPlaces[_place] || "";
    const placeSuffix = mappedPlacesSuffix[_place] || "th";

    return `${_place}${placeSuffix} ${placeSymbol}`;
  }

  return (
    <>
      <StyledCard place={place} total={total}>

        <Box>{renderPlace()}</Box>

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
