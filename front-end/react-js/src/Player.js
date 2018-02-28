import React from 'react';

const PlayerAPI = {
  players: [
    {number: 1, name: "Ben Blocker", position: "G"},
    {number: 2, name: "Dave Defender", position: "D"},
    {number: 3, name: "Sam Sweeper", position: "D"},
    {number: 4, name: "Matt Midfielder", position: "M"},
    {number: 5, name: "William Winger", position: "M"},
    {number: 6, name: "Fillipe Forward", position: "F"}
  ],
  all: function () {
    return this.players
  },
  get: function (id) {
    const isPlayer = p => p.number === id
    return this.players.find(isPlayer)
  }
};

const Player = (props) => {
  const player = PlayerAPI.get(
    parseInt(props.match.params.number, 10)
  );
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>{player.position}</h2>
    </div>
  )
};

export default Player;