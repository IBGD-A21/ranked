import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { stringAvatar } from "../../utils";
import { MemberCardProps } from "./types";
import { Add, Remove } from "@mui/icons-material";

const MemberCard = (props: MemberCardProps) => {
  const {
    name = "Lorem Ipsum",
    stars
  } = props;

  const [_stars, setStars] = React.useState(stars);

  const renderStars = () => [...Array(_stars)].map((_, i) => <StarIcon key={i} />);

  const handleStarChange = (buttonState: "add" | "remove") => {
    setStars(prev => (buttonState === "add" ? prev + 1 : prev - 1));
  };

  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar {...stringAvatar(name)} />}
          title={name}
        />

        <CardContent>{renderStars()}</CardContent>

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

      </Card>
    </>
  );
};

export default MemberCard;
