import { IHandleAddMember } from "../../models";
import { Members } from "../../models/member.types";

export interface NavbarProps {
  members: Members;
  addNewMember: (params: IHandleAddMember) => void;
}
