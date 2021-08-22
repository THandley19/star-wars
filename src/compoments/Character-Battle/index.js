import React, { useEffect, useState } from "react";

export default function CharacterBattle() {
  const charData = [
    {
      id: "1",
      name: "Rey",
      attack: 5,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_rey_tros.png",
    },
    {
      id: "2",
      name: "Luke Skywalker",
      attack: 9,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_luke_jediknight.png",
    },
    {
      id: "3",
      name: "Obi Wan Kenobi",
      attack: 7,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_obiwangeneral.png",
    },
    {
      id: "4",
      name: "Kylo Ren",
      attack: 6,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_kyloren.png",
    },
    {
      id: "5",
      name: "Darth Sidious",
      attack: 8,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_sidious.png",
    },
    {
      id: "6",
      name: "Darth Vader",
      attack: 10,
      health: 10,
      image: "https://game-assets.swgoh.gg/tex.charui_vader.png",
    },
  ];
  const [userCharacterId] = useState(localStorage.getItem("user"));
  const [enemyCharacterId] = useState(localStorage.getItem("enemy"));
  const [user, setUser] = useState([]);
  const [enemy, setEnemy] = useState([]);
  const [userHealth, setuserHealth] = useState();
  const [enemyHealth, setenemyHealth] = useState();
  useEffect(() => {
    const userChar = charData.find(({ id }) => id === userCharacterId);
    const enemyChar = charData.find(({ id }) => id === enemyCharacterId);
    setUser([userChar]);
    setEnemy([enemyChar]);
    setuserHealth(userChar.health);
    setenemyHealth(enemyChar.health);
  }, []);

  const handleBattle = () => {
    const userDamage = Math.floor(Math.random() * (5 - 0) + 0);
    const enemyDamage = Math.floor(Math.random() * (5 - 0) + 0);
    if (userHealth - enemyDamage <= 0) {
      return setuserHealth(10), setenemyHealth(10);
    } else if (enemyHealth - userDamage <= 0) {
      return setuserHealth(10), setenemyHealth(10);
    }
    setuserHealth(userHealth - enemyDamage);
    setenemyHealth(enemyHealth - userDamage);
  };

  return (
    <div>
      <div className="main">
        {user.map((char) => {
          return (
            <div className="card" key={char.id}>
              <img
                id={char.id}
                src={char.image}
                alt={char.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <h5 className="card-title">Health: {userHealth}</h5>
              </div>
            </div>
          );
        })}
        {enemy.map((char) => {
          return (
            <div className="card" key={char.id}>
              <img
                id={char.id}
                src={char.image}
                alt={char.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{char.name}</h5>
                <h5 className="card-title">Health: {enemyHealth}</h5>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={handleBattle}>Battle</button>
    </div>
  );
}
