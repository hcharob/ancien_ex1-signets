import "./Signet.scss";
import SortIcon from '@mui/icons-material/Sort';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Signet({id, titre, couleur, date}) {
  return (
    <article className="Signet">
      <div className="iconeSort" >
       <SortIcon />
      </div>
      <div className="iconePoint" >
        <MoreVertIcon />
      </div>
     <img src={"images/img" + id + ".png"} />
        <div className="boiteTexte" style={{backgroundColor: couleur}}>
          <h3> {titre} </h3> 
          <p>Modifié le: {date}</p> 
        </div>
    </article>
  );
}
