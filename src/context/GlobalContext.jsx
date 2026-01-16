import { createContext } from "react";
import { useBikes } from "../hooks/useBikes";
import { useFavourites } from "../hooks/useFavourites";
import { useCompare } from "../hooks/useCompare"




export const GlobalContext = createContext()




export default function GlobalProvider({ children }) {

    const bikes = useBikes()
    const favourite = useFavourites()
    const compare = useCompare()


    return (
        <GlobalContext.Provider value={{ bikes, ...favourite, ...compare }}>
            {children}
        </GlobalContext.Provider>
    )
}