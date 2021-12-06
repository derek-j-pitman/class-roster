import "./styles.css";

let roster_objects = [
  { firstName: "Derek", lastName: "Pitman", favoriteColor: "green" },
  { firstName: "Abdulwahab", lastName: "Murshed", favoriteColor: "blue" },
  { firstName: "Anton", lastName: "Schuster", favoriteColor: "orange" },
  { firstName: "Imani", lastName: "Taylor", favoriteColor: "pink" }
];

function RosterRow(personInfo, index) {
  let className = "row";
  if (index % 2 === 0) {
    className += " zebra";
  }
  return (
    <div className={className}>
      <span>{personInfo.firstName}</span>
      <span>{personInfo.lastName}</span>
      <span style={{ color: personInfo.favoriteColor }}>
        {personInfo.favoriteColor}
      </span>
    </div>
  );
}
export default function App() {
  let rosterElements = roster_objects.map(RosterRow);
  return <div className="App">{rosterElements}</div>;
}
