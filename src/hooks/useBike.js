import { useEffect, useState } from "react";

const { VITE_BIKES_API_URL } = import.meta.env;

export function useBike(id) {
  const [bike, setBike] = useState();
  

  useEffect(() => {
    if (!id) {
      setBike(null); // reset quando id non esiste
      return;
    }

    const fetchBike = async () => {
      try {
        const response = await fetch(`${VITE_BIKES_API_URL}/bikes/${id}`);
        const data = await response.json();
        setBike(data.bike);
      } catch (error) {
         console.error(error);
        
      } 
    };

    fetchBike();
  }, [id]);

  

  return  {bike} ;
}
