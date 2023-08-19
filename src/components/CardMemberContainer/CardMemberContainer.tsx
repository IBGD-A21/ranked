import React from "react";
import { CardMember } from "../CardMember";
import { Members } from "../../models/member.types";
import { sortArray } from "../../utils";
import { IStarChanged } from "../CardMember/types";
import { CardMemberContainerProps } from "./types";
import { StyledBox, StyledCard } from "./styles";

const CardMemberContainer = (props: CardMemberContainerProps) => {
  const { members, total } = props;
  const [membersSorted, setMembersSorted] = React.useState<Members>(sortArray(members, "stars"));

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
          total={total}
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
