import { Members } from "../../models/member.types";
import { MemberCardProps } from "../CardMember/types";

export interface CardMemberContainerProps {
  members: Members;
  total: MemberCardProps['total'];
}
