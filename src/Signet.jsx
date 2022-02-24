import "./Signet.scss";

export default function Signet({etatSignet, id, titre, couleur}) {
  return (
    <article className="Signet">
    <img src={"images/img" + id + ".png"} />
    </article>
  );
}
