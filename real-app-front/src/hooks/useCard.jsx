import { useEffect, useState } from "react";
import cardsService from "../services/cardsService";

export const useCard = (id) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    const getCards = async () => {
      const { data } = await cardsService.getCard(id);
      setCard(data);
    };
    getCards();
  }, [id]);

  return card;
};
