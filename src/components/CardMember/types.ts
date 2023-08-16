import { Member } from "../../models/member.types";

export interface MemberCardProps extends Omit<Member, "id"> {
    onStarChanged: (data: any) => void
}
