import { AddMember } from "../../../../models/member.types";

export interface AddMemberFormProps {
  open: boolean;
  onDialogClose: () => void;
  onAddMember?: (member: AddMember) => void;
}
