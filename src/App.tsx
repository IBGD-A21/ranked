import React from "react";
import "./App.css";
import { CardMember } from "./components/CardMember";
import { Member, Members } from "./models/member.types";

function App() {
  const members: Members = [
    { id: 0, name: "Lorem Ipsum 1", stars: Math.round(Math.random() * 10) },
    { id: 1, name: "Lorem Ipsum 2", stars: Math.round(Math.random() * 10) },
    { id: 2, name: "Lorem Ipsum 3", stars: Math.round(Math.random() * 10) },
    { id: 3, name: "Lorem Ipsum 4", stars: Math.round(Math.random() * 10) },
    { id: 4, name: "Lorem Ipsum 5", stars: Math.round(Math.random() * 10) },
  ];

  const [membersSorted, setMembersSorted] = React.useState<Members>(() => {
    const temp = [...members];
    return temp.sort((a: Member, b: Member) => (a.stars > b.stars ? -1 : 1))
  });

  console.log("non sorted", members);
  console.log("sorted", membersSorted);

  const handleOnStarChanged = (data: any) => {
    console.log(data);
  };

  const renderMemberList = () => {
    return membersSorted
      // .sort((a: Member, b: Member) => (a.stars > b.stars ? -1 : 1))
      .map((member, index) => {
        return <CardMember
          key={index}
          name={member.name}
          stars={member.stars}
          onStarChanged={handleOnStarChanged}
        />;
      });
  };

  return <div className="App">{renderMemberList()}</div>;
}

export default App;
