import "./ListeSignets.scss";
import Signet from "./Signet";
import lesSignets from "./data/Signets.json";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export default function ListeSignets() {
  return (
    <section className="ListeSignets">
      <div className="signets">
   
        {
        lesSignets.map(s => <Signet id={s.id} titre={s.titre} couleur={s.couleur} date={s.date} /> )
        }
      </div>
      <div className="boutonBas" >
        <Fab style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </section>
  );
}
