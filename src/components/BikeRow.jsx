import { Link } from "react-router-dom";
import React, { useContext } from "react"; // ✅ React incluso
import { GlobalContext } from "../context/GlobalContext";



export default React.memo(function BikeRow({ id, title, category }) {

    const { toggleFavourite, isFavourite, toggleCompare, isInCompare, compareIds } = useContext(GlobalContext);


    return (
        <tr key={id} className="align-middle">
            <th scope="row" className="text-center">
                <input
                    type="checkbox"
                    checked={isInCompare(id)}
                    onChange={() => toggleCompare(id)}
                    disabled={!isInCompare(id) && compareIds.length >= 2} />
            </th>
            <td>{title}</td>
            <td>{category}</td>
            <td className="text-center">
                <Link to={`/bikes/${id}`} className="btn btn-primary">
                    Dettaglio
                </Link>
            </td>
            <td className="text-center">
                <button
                    className="favourite_btn"
                    onClick={() => toggleFavourite({ id, title, category })}>
                    {isFavourite(id) ? <i className="bi bi-heart-fill favourite_btn_on"></i> : <i className="bi bi-heart"></i>}</button>
            </td>
        </tr>

    )

})

