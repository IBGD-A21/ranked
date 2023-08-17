import { Member } from "../../models/member.types";

export interface MemberCardProps extends Member {
  place: number;
  onStarChanged: (data: IOnStarChanged) => void;
}

export interface IOnStarChanged extends Pick<Member, "id" | "stars"> { }
