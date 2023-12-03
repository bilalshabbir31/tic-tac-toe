import { useState } from "react"

const Player = ({ initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // (editing) => !editing is best practice to change state if value is depend on previous state.
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  // let btnCaption = 'Edit';
  if (isEditing) {
    editablePlayerName = (<input type="text" required value={playerName} onChange={handleChange}/>);
    // btnCaption="Save"
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player