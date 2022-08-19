export default function Header(props) {
  return (
    <div className="header">
      <div className="textLg textLight">{props.heading}</div>
      <button className="btnRound">
        <img className="icon" src={props.img} alt="" />
      </button>
    </div>
  );
}
