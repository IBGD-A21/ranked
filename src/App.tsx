import React from "react";
import "./App.css";
import { CardMember } from "./components/CardMember";
import { Members } from "./models/member.types";
import { IOnStarChanged } from "./components/CardMember/types";
import { sortArray } from "./utils";

function App() {
  const members: Members = [
    { id: 0, name: "Lorem Ipsum 1", stars: 0 },
    { id: 1, name: "Lorem Ipsum 2", stars: 0 },
    { id: 2, name: "Lorem Ipsum 3", stars: 0 },
    { id: 3, name: "Lorem Ipsum 4", stars: 0 },
    { id: 4, name: "Lorem Ipsum 5", stars: 0 },
  ];
  const [membersSorted, setMembersSorted] = React.useState<Members>(sortArray(members, "stars"));

  const handleOnStarChanged = (data: IOnStarChanged) => {
    const membersTemp = [...membersSorted];
    const index = membersTemp.findIndex((el) => el.id === data.id);

    index >= 0 && (membersTemp[index].stars = data.stars);

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
        />
      );
    });

  return <div className="App">{renderMemberList()}</div>;
}

export default App;
