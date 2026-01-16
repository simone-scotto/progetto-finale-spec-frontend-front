import { useEffect, useState } from "react";


const { VITE_BIKES_API_URL } = import.meta.env

export function useBikes() {

  const [bikes, setBikes] = useState([])
  
      useEffect(() => {
          fetch(`${VITE_BIKES_API_URL}/bikes`)
              .then(res => res.json())
              .then(data => setBikes(data))
              .catch(error => console.error(error))
      }, [])
  return bikes
}
