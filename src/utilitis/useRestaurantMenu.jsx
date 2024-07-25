import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(MENU_URL + resId);
      const json = await data.json();
      setResMenu(json);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

  return resMenu;
};

export default useRestaurantMenu;
