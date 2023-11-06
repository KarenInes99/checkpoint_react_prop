import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ 
  nom = 'Nom du joueur par défaut',
  nationalite = 'Nationalité par défaut',
  numéro_de_maillot = 0,
  age = 0,
  poste = 'Poste par défaut',
  équipe = 'Équipe par défaut',
  URL_image = '/default-image.jpg'
}) => {
  return (
    <Card>
      <Card.Img src={URL_image} style={{width:'80px', height:'80px'}}/>
      <Card.Body>
        <Card.Title style={{color : 'red', fontWeight:'bold'}}>{nom}</Card.Title>
        <Card.Text>Nationalité : {nationalite}</Card.Text>
        <Card.Text>Numéro de maillot : {numéro_de_maillot}</Card.Text>
        <Card.Text>Âge : {age} ans</Card.Text>
        <Card.Text>Poste : {poste}</Card.Text>
        <Card.Text>Équipe : {équipe}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Player;
