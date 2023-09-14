import React from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Container, Toolbar, IconButton, Typography } from "@mui/material";
import { PersonAddAlt, Download } from "@mui/icons-material";
import { AddMemberForm } from "../common/forms/add-user";
import { NavbarProps } from "./navbar-props";
import { LogoA21 } from "../logo";
import { useExportExcel } from "../../hooks";
import { FILE_NAME } from "./constants";
import { ExcelUploader } from "../common/import-excel";
import { IHandleAddMember } from "../../models";

const Navbar = (props: NavbarProps) => {
  const {
    addNewMember,
    members,
  } = props;
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  const handleAddUserDialog = () => setOpenDialog(true);

  const handleClose = () => setOpenDialog(false);

  const handleAddMember = (params: IHandleAddMember) => {
    addNewMember && addNewMember(params);
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

            <Box sx={{ flexGrow: 0 }} display="flex">
              <IconButton onClick={handleAddUserDialog}>
                <PersonAddAlt />
              </IconButton>
              <IconButton onClick={handleDownloadMembers}>
                <Download />
              </IconButton>

              <ExcelUploader
                onAddMember={($event) => {
                  handleAddMember({ newMembers: $event, reset: true });
                }}
              />

            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <AddMemberForm
        open={openDialog}
        onDialogClose={handleClose}
        onAddMember={($event) => {
          handleAddMember({ newMembers: $event, reset: false });
        }}
      />
    </>
  );
}
export default Navbar;
