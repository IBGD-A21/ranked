import { AddMembers } from "../../../../models";

export interface AddMemberFormProps {
  open: boolean;
  onDialogClose: () => void;
  onAddMember?: (member: AddMembers) => void;
}
