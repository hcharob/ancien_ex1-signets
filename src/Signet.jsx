import "./Signet.scss";

export default function Signet({id, titre, couleur, date}) {
  return (
    <article className="Signet">
     <img src={"images/img" + id + ".png"} />
        <div className="boiteTexte" style={{backgroundColor: couleur}}>
          <h3> {titre} </h3> 
          <p>Modifié le: {date}</p> 
        </div>
    
    </article>
  );
}
