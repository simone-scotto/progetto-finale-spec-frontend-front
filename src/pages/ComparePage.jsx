import { useContext, useMemo } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useBike } from "../hooks/useBike";
import { useNavigate } from "react-router-dom";

export default function ComparePage() {
    const { compareIds, toggleCompare, isFavourite, toggleFavourite } = useContext(GlobalContext);
    const navigate = useNavigate()



    const { bike: bike1 } = useBike(compareIds[0] || null);
    const { bike: bike2 } = useBike(compareIds[1] || null);

    const compareBikes = useMemo(() => [bike1, bike2].filter(Boolean), [bike1, bike2]);

    if (compareIds.length > 0 && compareBikes.length === 0) {
        return <p className="text-center mt-5">Caricamento delle bici...</p>;
    }

    if (compareBikes.length === 0) {
        return <p className="text-center mt-5">Nessuna bici selezionata per il confronto</p>;
    }
    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Comparatore Bici</h3>
            <div className="d-flex justify-content-center gap-4 flex-wrap">
                {compareBikes.map(bike => (
                    <div key={bike.id} className="card p-3"                >
                        <div className="compare-card"
                            onClick={() => navigate(`/bikes/${bike.id}`)} >
                            <img src={bike.imageUrl[0]} alt={bike.title} className="card-img-top mb-2" />
                            <h5>{bike.title}</h5>
                            <p>Categoria: {bike.category}</p>
                            <p>Prezzo: €{bike.price}</p>
                            <p>Brand: {bike.brand}</p>
                            <p>Materiale telaio: {bike.frameMaterial}</p>
                            <p>Peso: {bike.weight} Kg</p>
                        </div>

                        <div className="d-flex  flex-column gap-2 mt-2">
                            <button className="btn btn-danger" onClick={() => toggleCompare(bike.id)}>
                                Rimuovi dal comparatore
                            </button>
                            <button
                                onClick={() => toggleFavourite(bike)}
                                className={`btn ${isFavourite(bike.id) ? "btn-danger" : "btn-outline-primary"}`}
                            >
                                {isFavourite(bike.id) ? "Rimuovi dai Preferiti" : "Aggiungi ai Preferiti"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
