import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom"




export default function BikeDetails({ bike }) {

    const navigate = useNavigate()


    const { toggleFavourite, isFavourite, toggleCompare, isInCompare, compareIds, bikes } = useContext(GlobalContext)

    const {
        title,
        brand,
        category,
        frameMaterial,
        imageUrl,
        suspensionType,
        usage,
        weight,
        wheelSize,
        price,
        id
    } = bike


    // Recupera i dettagli completi delle bici aggiunte al comparatore
    const compareBikes = compareIds
        .map(compareId => bikes.find(b => b.id === compareId))
        .filter(Boolean) // rimuove eventuali undefined


    const canAddToCompare = compareIds.length < 2 && !isInCompare(id)
    return (
        <>
            <div className=" bikeCard mt-5 ">
                <div className="row mx-0 bikeCard_header">
                    <div className="col">
                        <h1>{title}</h1>
                        <p>Categoria: {category}</p>
                    </div>
                </div>
                <div className="row mx-0 bikeCard_main">
                    <div className="col-8 h-100 ">
                        <img className="w-100  object-fit-contain h-100" src={imageUrl[0]} alt={title} />
                    </div>

                    <div className="col-4 d-flex flex-column justify-content-center" >


                        <h3 className="mb-5">{brand}</h3>
                        <p>Prezzo: €{price}</p>
                        <button
                            onClick={() => toggleFavourite(bike)}
                            className={`btn ${isFavourite(id) ? "btn-danger" : "btn-outline-primary"
                                }`}
                        >
                            {isFavourite(id)
                                ? "Rimuovi dai Preferiti"
                                : "Aggiungi ai Preferiti"}
                        </button>
                    </div>
                </div>
                <div className="row mx-0 my-5 ">
                    <div className="col d-flex justify-content-center">
                        <p className="bike_card_details_badges">{frameMaterial}</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p className="bike_card_details_badges">{weight} Kg</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p className="bike_card_details_badges">{suspensionType}</p>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <p className="bike_card_details_badges">{wheelSize}"</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="row mx-0 my-4 py-5">
                    <div className=" col d-flex justify-content-center">
                        <div>
                            <h6>Caratteristiche</h6>
                            <ul className="p-0">
                                <li className="py-1">Materiale Telaio: {frameMaterial}</li>
                                <li className="py-1">Utilizzo: {usage}</li>
                                <li className="py-1">Diametro ruote: {wheelSize}</li>
                                <li className="py-1">Sospensioni: {suspensionType}</li>
                            </ul>
                        </div>
                    </div>

                    <div className=" col d-flex justify-content-center">
                        <div>
                            <h6>Confronta con:</h6>

                            {/* Lista bici nel comparatore */}
                            {compareBikes.length > 0 && (
                                <div>

                                    <ul className="p-0">
                                        {compareBikes.map(cb => (
                                            <li key={cb.id}>
                                                <input
                                                    type="checkbox"
                                                    checked={isInCompare(cb.id)}
                                                    onChange={() => toggleCompare(cb.id)}
                                                    className="me-2"
                                                />
                                                {cb.title}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className="btn btn-primary mt-2"
                                        onClick={() => navigate("/bikes/compare")}
                                    >
                                        Vai alla pagina di confronto
                                    </button>
                                </div>

                            )}

                            {/* Bottone aggiungi al confronto */}
                            {canAddToCompare && (
                                <button
                                    className="btn btn-outline-warning mt-2"
                                    onClick={() => toggleCompare(id)}
                                >
                                    Aggiungi al confronto
                                </button>
                            )}

                            {/* Caso limite: comparatore pieno */}
                            {compareIds.length === 2 && !isInCompare(id) && (
                                <p className="text-muted mt-2">
                                    Puoi confrontare al massimo 2 bici
                                </p>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}