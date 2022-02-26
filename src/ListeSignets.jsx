import "./ListeSignets.scss";
import Signet from "./Signet";
import lesSignets from "./data/Signets.json";
import SortIcon from '@mui/icons-material/Sort';

export default function ListeSignets() {
  return (
    <section className="ListeSignets">
      <div className="signets">
      <SortIcon />
        {
        lesSignets.map(s => <Signet id={s.id} titre={s.titre} couleur={s.couleur} date={s.date} /> )
        }
      </div>
      <button className="boutonBas">+</button>
    </section>
  );
}
