import "./Appli.scss";
import Entete from "./Entete";
import Signet from "./Signet";
import ListeSignets from './ListeSignets';
import {useState} from 'react';

function Appli() {
  const etatSignet = useState({});

  //Variable
  const panier = etatSignet[0];

  return (
    <div className="Appli">
      <Entete />
      <ListeSignets etatSignet={etatSignet} />
    </div>
  );
}

export default Appli;
