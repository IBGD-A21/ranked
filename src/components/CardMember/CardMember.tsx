import { Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { stringAvatar } from "../../utils";
import { MemberCardProps } from "./types";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const MemberCard = (props: MemberCardProps) => {
  const {
    name = "Lorem Ipsum",
    stars,
    id,
    onAddStar,
  } = props;

  const renderStars = () => {
    return [...Array(stars)].map((_, i) => <StarIcon key={i} />);
  };

  const onAddStarChild = () => {
    onAddStar && onAddStar(id)
  }

  return (
    <>
      <Card>
        <CardHeader avatar={<Avatar {...stringAvatar(name)} />} title={name} />
        <CardContent>{renderStars()}</CardContent>
        <CardActions>
        <IconButton
          size="small"
          color="primary"
          onClick={onAddStarChild}
        >
         <AddIcon />
        </IconButton>
        <Button
          size="small"
          color="primary"
          // onClick={onAddStar}
        >
         <RemoveIcon />
        </Button>
      </CardActions>
      </Card>
    </>
  );
};

export default MemberCard;
