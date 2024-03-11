export default function Log ({turns}) {
  // for (turn of turns) {
    // const jsxText = `<li>{`${turn.player} turned at ${turn.square}`}</li>`
  // }
  return (
    <ol id="log">
      {turns.map(turn => (
        <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row}, {turn.square.col}</li>
      ))}
    </ol>
  );
}