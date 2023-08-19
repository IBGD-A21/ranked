import { Member } from "../../models/member.types";

export interface MemberCardProps extends Member {
  place: number;
  total: number;
  onStarChanged: (data: IStarChanged) => void;
}

export interface IStarChanged extends Pick<Member, "id" | "stars"> { }

export interface StyledCardHeaderProps extends Pick<MemberCardProps, 'place' | 'total'> { }
