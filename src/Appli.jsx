import "./Appli.scss";
import Entete from "./Entete";
import ListeSignets from './ListeSignets';

function Appli() {
  return (
    <div className="Appli">
      <Entete />
      <ListeSignets />
    </div>
  );
}

export default Appli;
