import { useEffect, useState } from "react";
import cardsService from "../services/cardsService";
import { toast } from "react-toastify";

export const useMyCards = () => {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    try {
      const { data } = await cardsService.getAll();
      setCards(data);
    } catch (err) {
      toast.error("You must connect to server for search cards");
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return cards;
};
