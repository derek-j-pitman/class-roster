import "./styles.css";

let roster_info = [
  ["Derek", "Pitman", "green"],
  ["Abdulwahab", "Murshed", "blue"],
  ["Anton", "Schuster", "orange"],
  ["Imani", "Taylor", "pink"]
];

function RosterRow(personInfo) {
  return (
    <div className="row">
      <span>{personInfo[0]}</span>
      <span>{personInfo[1]}</span>
      <span style={{ color: personInfo[2] }}>{personInfo[2]}</span>
    </div>
  );
}
export default function App() {
  let rosterElements = roster_info.map(RosterRow);
  return <div className="App">{rosterElements}</div>;
}
