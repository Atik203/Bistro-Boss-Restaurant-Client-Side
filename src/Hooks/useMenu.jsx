import { useEffect, useState } from "react";

const useMenu = () => {
  const [Menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMenu(data);
      });
  }, []);

  return { Menu, loading };
};

export default useMenu;
