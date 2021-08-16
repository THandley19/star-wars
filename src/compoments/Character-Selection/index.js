import React, { useState } from "react";
import "./style.css";

export default function CharacterSelect() {
  const [userCharacter, setuserCharacter] = useState([]);
  const [enemyCharacter, setenemyCharacter] = useState([]);
  const [enemyorUser, setenemyorUser] = useState(false);
  const charData = [
    {
      id: 1,
      name: "Rey",
      attack: 5,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_rey_tros.png",
    },
    {
      id: 2,
      name: "Luke Skywalker",
      attack: 9,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_luke_jediknight.png",
    },
    {
      id: 3,
      name: "Obi Wan Kenobi",
      attack: 7,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_obiwangeneral.png",
    },
    {
      id: 4,
      name: "Kylo Ren",
      attack: 6,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_kyloren.png",
    },
    {
      id: 5,
      name: "Darth Sidious",
      attack: 8,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_sidious.png",
    },
    {
      id: 6,
      name: "Darth Vader",
      attack: 10,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_vader.png",
    },
  ];
  const handleClick = (e) => {
    const charSelected = e.target.alt;
    if (!enemyorUser) {
      setenemyorUser(true);
      return setuserCharacter([charSelected]);
    } else {
      setenemyorUser(false);
      return setenemyCharacter([charSelected]);
    }
  };

  return (
    <div>
      <div className="main">
        {charData.map((char) => {
          return (
            <div className="card" key={char.id}>
              <img
                src={char.image}
                alt={char.name}
                className="card-img-top"
                onClick={handleClick}
              />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <p className="card-text">Attack: {char.attack}</p>
                <p className="card-text"> Health: {char.health}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Selected Characters:</h1>
        {userCharacter.length === 0 ? (
          <h3>User: None</h3>
        ) : (
          userCharacter.map((char) => {
            return <h3>User: {char}</h3>;
          })
        )}
        {enemyCharacter.length === 0 ? (
          <h3>Enemy: None</h3>
        ) : (
          enemyCharacter.map((char) => {
            return <h3>Enemy: {char}</h3>;
          })
        )}
      </div>
    </div>
  );
}
