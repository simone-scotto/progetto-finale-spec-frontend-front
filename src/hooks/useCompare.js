import { useState } from "react"

export function useCompare() {
    const [compareIds, setCompareIds] = useState([]);
  

  

  const toggleCompare = (id) => {
    setCompareIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : prev.length < 2 ? [...prev, id] : prev
    );
  }

  const isInCompare = (id) => compareIds.includes(id);

  return { compareIds, toggleCompare, isInCompare };
}