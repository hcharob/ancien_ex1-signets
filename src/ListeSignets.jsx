import "./ListeSignets.scss";
import Signet from "./Signet";
import lesSignets from "./data/Signets.json";

export default function ListeSignets({etatSignet}) {
  return (
    <section className="ListeSignets">
      <div className="produits">
        {
        lesSignets.map(s => <Signet etatSignet={etatSignet} id={s.id} titre={s.nom} couleur={s.couleur} /> )
        }
      </div>
    </section>
  );
}
