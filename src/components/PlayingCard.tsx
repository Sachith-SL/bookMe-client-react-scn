import spades_icon from "../assets/spade_icon.svg";
import diamonds_icon from "../assets/diamand_icon.png";
import clubs_icon from "../assets/clubs_icon.png";
import hearts_icon from "../assets/hearts_icon.png";

function PlayingCard() {
  const rank = "K";
  const suit = "spades";
  const suitIcon = `${suit}_icon`;

  return (
    <div className="card" style={{ width: "200px", margin: "5px" }}>
      <div className="text-left">
        <h5 className="text-danger" style={{ margin: "5px" }}>
          {rank}
        </h5>
        <img
          src={diamonds_icon}
          style={{ width: "1.5rem", margin: "3px" }}
          className="card-img-top"
          alt="Card example"
        />
      </div>
      <div className="card-body text-center">
        <h1 className="card-title text-danger" style={{ fontSize: "100px" }}>
          {rank}
        </h1>
      </div>
      <div className="rotated-text">
        <h5 className="text-danger" style={{ margin: "5px" }}>
          {rank}
        </h5>
        <img
          src={diamonds_icon}
          style={{ width: "1.5rem", margin: "3px" }}
          className="card-img-top"
          alt="Card example"
        />
      </div>
    </div>
  );
}

export default PlayingCard;
