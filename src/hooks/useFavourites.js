import {  useState } from "react";






export function useFavourites() {

    

  const [favourites, setFavourites] = useState([])

  const addFavourite = (bike) => {
    setFavourites((prev) => {
        if (prev.some((p) => p.id === bike.id)) return prev
            return [...prev, bike]
           
    })
  }

  const removeFavourite = (id) => {
    setFavourites(prev.filter(p => p.id !== id))
  }

  const toggleFavourite = (bike) => {
    setFavourites((prev) =>
      prev.some((p) => p.id === bike.id)
        ? prev.filter((b) => b.id !== bike.id)
        : [...prev, bike]
    );
  };

   const isFavourite = (id) =>
    favourites.some((b) => b.id === id);

      
  return {
    favourites,
    addFavourite,
    removeFavourite,
    toggleFavourite,
    isFavourite,
  };
}