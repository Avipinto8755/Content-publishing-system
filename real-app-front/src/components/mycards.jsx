import { Link } from "react-router-dom";
import PageHeader from "./common/pageHeader";
import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";

const MyCards = () => {
  const cards = useMyCards();
  return (
    <>
      <PageHeader
        title={"my-cards"}
        description="your cards are in the list below"
      />

      <div className="row">
        <Link to="/create-card">Create a New Card</Link>
      </div>

      <div className="row">
        {!cards.length ? (
          <p>no cards...</p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};

export default MyCards;
