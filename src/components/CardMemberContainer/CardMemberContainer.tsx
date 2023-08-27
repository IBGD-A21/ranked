import React from "react";
import { CardMember } from "../CardMember";
import { Members } from "../../models/member.types";
import { sortArray } from "../../utils";
import { IStarChanged } from "../CardMember/types";
import { CardMemberContainerProps } from "./types";
import { StyledBox, StyledCard } from "./styles";

const CardMemberContainer = (props: CardMemberContainerProps) => {
  const { members } = props;
  const [membersSorted, setMembersSorted] = React.useState<Members>(sortArray(members, "stars"));

  React.useEffect(() => {
    setMembersSorted(() => sortArray(members, "stars"))
  }, [members]);

  const handleOnStarChanged = (data: IStarChanged) => {
    const membersTemp = membersSorted.map((member) => {
      if (member.id === data.id) {
        return {
          ...member,
          stars: data.stars,
        };
      }
      return member;
    });

    const membersTempSorted = sortArray(membersTemp, "stars");

    localStorage.setItem('members', JSON.stringify(membersTempSorted))
    setMembersSorted(membersTempSorted);
  };

  const renderMemberList = () =>
    membersSorted.map((member, index) => {
      return (
        <CardMember
          key={member.id}
          place={index}
          id={member.id}
          name={member.name}
          stars={member.stars}
          onStarChanged={handleOnStarChanged}
        />
      );
    });

  return (
    <StyledCard raised>
      <StyledBox>{renderMemberList()}</StyledBox>
    </StyledCard>
  );
};

export default CardMemberContainer;
