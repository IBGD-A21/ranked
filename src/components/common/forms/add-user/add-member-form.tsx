import React from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { AddMemberFormProps } from "./types";
import { AddMember, Member } from "../../../../models/member.types";

export const AddMemberForm = (props: AddMemberFormProps) => {
  const { open, onDialogClose, onAddMember } = props;

  const [name, setName] = React.useState<Member["name"]>();
  const [stars, setStars] = React.useState<Member["stars"]>();

  const emitAddMember = () => {
    if (name && stars) {
      const newMember: AddMember = { name, stars };
      onAddMember && onAddMember(newMember);
    }
  };

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleStarsInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStars(Number(event.target.value));
  };

  return (
    <Dialog open={open} onClose={onDialogClose}>
      <DialogTitle>Nuevo miembro</DialogTitle>
      <DialogContent>
        {/* Name */}
        <TextField
          autoFocus
          fullWidth
          id="name"
          label="Nombre"
          type="email"
          variant="standard"
          onChange={handleNameInput}
        />

        {/* Name */}
        <TextField
          fullWidth
          id="stars"
          label="Estrellas"
          type="number"
          variant="standard"
          onChange={handleStarsInput}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogClose}>Cancelar</Button>
        <Button onClick={emitAddMember}>Aceptar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMemberForm;
