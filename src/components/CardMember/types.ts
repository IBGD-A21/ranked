import { Member } from "../../models/member.types";

export interface MemberCardProps extends Member {
  onAddStar: (props: any) => void;
}
