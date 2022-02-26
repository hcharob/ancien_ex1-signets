import "./Entete.scss";
import Avatar from "@material-ui/core/Avatar";

export default function Entete() {
  return (
    <header className="Entete">
      <h1>Signets</h1>
      <h2>Hervée Charbonneau-Robichaud</h2>
      <div className="iconeUtil">
      <Avatar alt="Jack Sparrow" src={"images/icone-utilisateur.jpg"} />
      </div>
    </header>
  );
}
