import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Container, Toolbar, IconButton, Typography } from "@mui/material";
import { PersonAddAlt } from "@mui/icons-material";
import { AddMemberForm } from "../common/forms/add-user";
import { AddMember, Member } from "../../models/member.types";
import { NavbarProps } from "./navbar-props";

const Navbar = (props: NavbarProps) => {
  const {
    members,
    addNewMember
  } = props;
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  const handleAddUserDialog = () => setOpenDialog(true);

  const handleClose = () => setOpenDialog(false);

  const handleAddMember = (member: AddMember) => {

    // localStorage.setItem('members', JSON.stringify(members))
    const newMember: Member= {
      id: members.length,
      name: member.name,
      stars: member.stars
    }
    // members.push(newMember)
    addNewMember && addNewMember(member);
    handleClose();
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              A21
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              A21
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleAddUserDialog}>
                <PersonAddAlt />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <AddMemberForm
        open={openDialog}
        onDialogClose={handleClose}
        onAddMember={handleAddMember}
      />
    </>
  );
}
export default Navbar;
