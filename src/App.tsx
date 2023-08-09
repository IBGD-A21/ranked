import "./App.css";
import { CardMember } from "./components/CardMember";
import { Members } from "./models/member.types";

function App() {
  const members: Members = [
    { id: 0, name: "Lorem Ipsum 1", stars: Math.round(Math.random() * 10) },
    { id: 1, name: "Lorem Ipsum 2", stars: Math.round(Math.random() * 10) },
    { id: 2, name: "Lorem Ipsum 3", stars: Math.round(Math.random() * 10) },
    { id: 3, name: "Lorem Ipsum 4", stars: Math.round(Math.random() * 10) },
    { id: 4, name: "Lorem Ipsum 5", stars: Math.round(Math.random() * 10) },
  ];

  const handleAddStar = (props: any) => {
    // console.log(props);
    members[props].stars++;
    console.log(members[props].stars);
  }

  const renderMemberList = () => {
    return members.map((member, index) => {
      return (
        <CardMember
          key={index}
          name={member.name}
          stars={member.stars}
          id={index}
          onAddStar={handleAddStar}
        />
      );
    });
  };

  return <div className="App">{renderMemberList()}</div>;
}

export default App;
