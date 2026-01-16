import { useContext } from "react";

import { GlobalContext } from "../context/GlobalContext";
import BikesTable from "../components/BikesTable";



export default function FavouritesPage() {

    const { favourites } = useContext(GlobalContext);
    return (

        <>
            <div className="bikes-page">
                <section className="bikes-section mt-4">
                    <h1 className="text-center mb-4">Biciclette preferite</h1>
                    <div className="container">
                        <BikesTable
                            className="bikes-section-table"
                            bikes={favourites} />
                    </div>
                </section>
            </div>



        </>

    )
}