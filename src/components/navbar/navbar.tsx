import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Container, Toolbar, IconButton, Typography } from "@mui/material";
import { PersonAddAlt, Download } from "@mui/icons-material";
import { AddMemberForm } from "../common/forms/add-user";
import { AddMember } from "../../models/member.types";
import { NavbarProps } from "./navbar-props";
import { LogoA21 } from "../logo";
import { useExportExcel } from "../../utils/hooks";
import { FILE_NAME } from "./constants";

const Navbar = (props: NavbarProps) => {
  const {
    addNewMember,
    members,
  } = props;
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  const handleAddUserDialog = () => setOpenDialog(true);

  const handleClose = () => setOpenDialog(false);

  const handleAddMember = (member: AddMember) => {
    addNewMember && addNewMember(member);
    handleClose();
  };

  const { exportToExcel } = useExportExcel();

  const handleDownloadMembers = () => {
    const data = members.map((member) => ({
      "Nombre": member.name,
      "Estrellas": member.stars,
    }))
    exportToExcel({ data, fileName: FILE_NAME });
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LogoA21 />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              marginLeft={1.5}
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
              <IconButton onClick={handleDownloadMembers}>
                <Download />
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
