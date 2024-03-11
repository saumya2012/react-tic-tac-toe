import { useState } from "react";

export default function ({initialName, symbol, isActive, onNameChange}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function editClickHandler () {
    setIsEditing((wasEditing) => !wasEditing);

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleChange (event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEditing ?
          <input type="text" required value={playerName} onChange={handleChange} /> :
          <span className="player-name">{playerName}</span>
        }
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editClickHandler}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}