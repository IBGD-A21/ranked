import React from "react";
import "./styles.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AddMember, Members } from "./models/member.types";
import { CardMemberContainer } from "./components/CardMemberContainer";
import { Box } from "@mui/material";
import { TotalContext } from "./hooks/total/total.hooks";
import { Navbar } from "./components/navbar";
import { MEMBERS_KEY } from "./constants";

const darkTheme = createTheme({ palette: { mode: "dark" }});

function App() {
  const members: Members = [];

  const [_members, setMembers] = React.useState<Members>(() => {
    const membersFromLocalStorage = JSON.parse(localStorage.getItem(MEMBERS_KEY) || "[]") as Members;
    return membersFromLocalStorage.length > 0 ? membersFromLocalStorage : members;
  });

  React.useEffect(() => {
    const membersFromLocalStorage = JSON.parse(localStorage.getItem(MEMBERS_KEY) || "[]") as Members;
    membersFromLocalStorage.length > 0 && setMembers(membersFromLocalStorage);
  }, []);

  const handleAddMember = (newMembers: AddMember[]) => {
    const newMembersTemp: Members = newMembers.map((member, i) => ({
      id: Date.now() + i,
      name: member.name,
      stars: member.stars,
    }));

    setMembers(prev => {
      const updatedList = [...prev, ...newMembersTemp];
      localStorage.setItem(MEMBERS_KEY, JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <TotalContext.Provider value={_members.length}>
          <Navbar
            addNewMember={handleAddMember}
            members={_members}
          />

          {/* <Typography variant="h1" className="A21">A21</Typography> */}
          {/* <Typography component="span" className="A21">Ranked</Typography> */}

          <CardMemberContainer members={_members} />
        </TotalContext.Provider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
