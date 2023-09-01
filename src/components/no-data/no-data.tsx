import { Box, Icon, Typography } from "@mui/material";
import { Warning } from "@mui/icons-material";

export interface NoDataProps {
  title: string;
  subTitle: string;
}

const NoData = (props: NoDataProps) => {
  const { title, subTitle } = props;
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Icon sx={{ width: "100%", height: "100%" }}>
        <Warning sx={{ fontSize: "3rem" }} />
      </Icon>
      <Typography variant="h1" gutterBottom fontSize="3rem">
        {title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default NoData;
