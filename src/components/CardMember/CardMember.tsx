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
    stars,
    onStarChanged,
  } = props;

  const [_stars, setStars] = React.useState(stars);
  
  const renderStars = () => [...Array(_stars)].map((_, i) => <StyledStarIcon key={i} />);
  
  const handleStarChange = (buttonState: "add" | "remove") => {
    console.log('1', _stars);
    setStars(prev => {
      if (buttonState === "add") return prev + 1;
      if (buttonState === "remove"  && prev > 1) return prev - 1;
      return 0;
    });
    console.log('2', _stars);
    onStarChanged(_stars);
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

          <Box>
            <Typography variant="caption">{_stars}</Typography>
          </Box>
        </CardActions>

      </StyledCard>
    </>
  );
};

export default MemberCard;
