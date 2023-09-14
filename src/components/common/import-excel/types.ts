import { AddMember } from "../../../models/member.types";

export interface ExcelUploaderProps {
  onAddMember?: (member: AddMember[]) => void;
}
