import { AddMember, Members } from "../../models/member.types";

export interface NavbarProps {
  members: Members;
  addNewMember: (newMember: AddMember[]) => void;
}
