import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { stringAvatar } from "../../utils";
import { MemberCardProps } from "./types";

const MemberCard = (props: MemberCardProps) => {
  const {
    name = "Lorem Ipsum",
    stars,
  } = props;

  const renderStars = () => {
    return [...Array(stars)].map((_, i) => <StarIcon key={i} />);
  };

  return (
    <>
      <Card>
        <CardHeader avatar={<Avatar {...stringAvatar(name)} />} title={name} />
        <CardContent>{renderStars()}</CardContent>
      </Card>
    </>
  );
};

export default MemberCard;
