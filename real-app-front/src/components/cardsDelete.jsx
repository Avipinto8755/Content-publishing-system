import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import cardsService from "../services/cardsService";

const CardsDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteCard = async () => {
      try {
        await cardsService.deleteCard(id);
        navigate("/my-cards");
      } catch (err) {
        console.log(err);
      }
    };
    deleteCard();
  }, [id, navigate]);

  return null;
};

export default CardsDelete;
