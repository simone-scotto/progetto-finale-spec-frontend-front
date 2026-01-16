import { useParams } from "react-router-dom"
import { useBike } from "../hooks/useBike"
import BikeDetails from "../components/BikeDetails"
export default function BikeDetailsPage() {


    const { id } = useParams()
    const { bike } = useBike(id)
    console.log(bike);



    if (!bike) {
        return <p className="text-center mt-5">Caricamento...</p>
    }

    return (
        <div className="bike_card_container mx-auto">
            <BikeDetails bike={bike} />
        </div>
    )














}