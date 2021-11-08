import "./styles.css";

let roster_info = [
  ["Derek", "Pitman", "green"],
  ["Abdulwahab", "Murshed", "blue"],
  ["Anton", "Schuster", "orange"],
  ["Imani", "Taylor", "pink"]
];

function RosterRow(firstName, lastName, favoriteColor) {
  return (
    <div className="row">
      <span>{firstName}</span>
      <span>{lastName}</span>
      <span style={{ color: favoriteColor }}>{favoriteColor}</span>
    </div>
  );
}
export default function App() {
  let rosterElements = [];
  for (let person of roster_info) {
    rosterElements.push(RosterRow(person[0], person[1], person[2]));
  }
  return <div className="App">{rosterElements}</div>;
}
