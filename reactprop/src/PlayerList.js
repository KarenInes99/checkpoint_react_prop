import React from 'react';
import { Card } from 'react-bootstrap';
import players from './players';
import Player from './player';
import './PlayerList.css';

const PlayerList = () => {
  return (
    <div className="card">
      {players.map((player, index) => (
        <Card key={index} className="player-card">
          <Card.Body>
            <Player
              {...player}
              // nom={player.nom}
              // nationalite={player.nationalite}
              // numéro_de_maillot={player.numéro_de_maillot}
              // age={player.age}
              // poste={player.poste}
              // équipe={player.équipe}
              // URL_image={player.URL_image}
            />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PlayerList;
