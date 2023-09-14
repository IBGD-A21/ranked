import { AddMember } from "./member.types";

export interface IHandleAddMember {
  newMembers: AddMember[];
  reset: boolean;
}
