import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import BikesTable from "../components/BikesTable";

export default function BikesPage() {
    const { bikes } = useContext(GlobalContext);

    return (
        <>

            <div className="bikes-page">
                <section className="bikes-section mt-4">
                    <h1 className="text-center mb-4">Tutte le biciclette</h1>
                    <div className="container bikes-scrollable-container">
                        <BikesTable
                            className="bikes-section-table"
                            bikes={bikes} />
                    </div>
                </section>
            </div>





        </>
    );
}
