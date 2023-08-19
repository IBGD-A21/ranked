import "./styles.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Members } from "./models/member.types";
import { CardMemberContainer } from "./components/CardMemberContainer";
import { Box, Typography } from "@mui/material";

const darkTheme = createTheme({ palette: { mode: "dark" }});

function App() {
  const members: Members = [
    { id: 0, name: "Lorem Ipsum 1", stars: 0 },
    { id: 1, name: "Lorem Ipsum 2", stars: 0 },
    { id: 2, name: "Lorem Ipsum 3", stars: 0 },
    { id: 3, name: "Lorem Ipsum 4", stars: 0 },
    { id: 4, name: "Lorem Ipsum 5", stars: 0 },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography variant="h1" className="A21">A21</Typography>
        <Typography component="span" className="A21">Ranked</Typography>
        <CardMemberContainer members={members} total={members.length} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
