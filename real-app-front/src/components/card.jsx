import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div className="card" style={{ width: "18rem", color: "black" }}>
      <img
        style={{ width: "16rem", height: "12rem " }}
        src={bizImage}
        className="card-img-top"
        alt={bizName}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{bizName}</h5>
        <p className="card-text">{bizDescription}</p>

        <ul className="list-group-flush list-group-flush">
          <div className="div list-group-item">{bizAddress}</div>
          <div className="div list-group-item">{bizPhone}</div>
        </ul>

        <Link to={`/my-cards/edit/${_id}`} className="card-link">
          <i className="bi bi-pencil-square"></i>
        </Link>
        <Link to={`/my-cards/delete/${_id}`} className="card-link">
          <i className="bi bi-trash3"></i>
        </Link>
        <Link to={`/my-cards/cardsPage/${_id}`} className="card-link ">
          <i className="bi bi-geo-alt"></i>
        </Link>
      </div>
    </div>
  );
};

export default Card;
