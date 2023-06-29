import PageHeader from "./common/pageHeader";
import { useMyCards } from "../hooks/useMyCards";
import Card from "./card";
import img from "../img/F.jpg";

const Home = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader
        title={
          <>
            Pinto <i className="bi bi-fan"></i> App
          </>
        }
        description=" Welcome to our site, Our website allows you to manage your tabs
        yourself and from anywhere in the most convenient way"
      />

      <div className="row">
        {!cards.length ? (
          <div>
            <p>
              Log in as a business user and start creating, editing and viewing
              your tabs.
            </p>
            <img src={img} alt="logo_cards" />
          </div>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};

export default Home;
