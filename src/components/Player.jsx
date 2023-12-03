import { useState } from "react"

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // (editing) => !editing is best practice to change state if value is depend on previous state.
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>
  // let btnCaption = 'Edit';
  if (isEditing) {
    playerName = <input type="text" required value={name}/>
    // btnCaption="Save"
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player