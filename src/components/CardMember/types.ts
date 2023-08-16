import { Member } from "../../models/member.types";

export interface MemberCardProps extends Member {
  onStarChanged: (data: IOnStarChanged) => void;
}

export interface IOnStarChanged extends Pick<Member, "id" | "stars"> { }
