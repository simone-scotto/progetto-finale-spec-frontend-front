import { useState, useContext, useMemo, useCallback } from "react";
import { GlobalContext } from "../context/GlobalContext";
import BikeRow from "./BikeRow";
import { Link } from "react-router-dom";




export default function BikesTable({ bikes }) {
    const { compareIds } = useContext(GlobalContext);

    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState(1);









    const handleSortAndOrder = (columnName) => {
        if (sortBy === columnName) {
            setSortOrder((prev) => prev * -1);
        } else {
            setSortBy(columnName);
            setSortOrder(1);
        }
    };

    // Filtra e ordina le bici
    const filteredAndSortedBikes = useMemo(() => {
        return [...bikes]
            .filter((b) => {
                const matchesTitle = b.title.toLowerCase().includes(search.toLowerCase());
                const matchesCategory =
                    !selectedCategory || b.category.toLowerCase() === selectedCategory.toLowerCase();
                return matchesTitle && matchesCategory;
            })
            .sort((a, b) => {
                if (!sortBy) return 0;
                if (sortBy === "title") return a.title.localeCompare(b.title) * sortOrder;
                if (sortBy === "category") {
                    const order = ["road", "gravel", "mtb"];
                    return (
                        order.indexOf(a.category.toLowerCase()) -
                        order.indexOf(b.category.toLowerCase())
                    ) * sortOrder;
                }
                return 0;
            });
    }, [bikes, search, selectedCategory, sortBy, sortOrder]);

    return (
        <div className="bikes-table">
            {/* Filtri */}
            <div className="filters mb-3 text-center">
                <input
                    type="text"
                    placeholder="Cerca modello..."
                    className="form-control w-50 mx-auto"
                    value={search}
                    onChange={e => debounceSetSearch(e.target.value)}
                />
                <div className="d-flex-column justify-content-center my-4">
                    <p><strong>Categoria:</strong></p>

                    <div className="d-flex gap-3 justify-content-center ">

                        {["Road", "MTB", "Gravel"].map((cat) => (
                            <span
                                key={cat}
                                className={`badge px-3 py-2 ${selectedCategory === cat ? "bg-primary" : "bg-secondary"
                                    }`}
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                    setSelectedCategory((prev) => (prev === cat ? "" : cat))
                                }
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottone comparatore */}
            {compareIds.length > 0 && (
                <div className="text-center my-3">
                    <Link to="/bikes/compare" className="btn btn-warning">
                        Vai al comparatore ({compareIds.length})
                    </Link>
                </div>
            )}

            {/* Tabella */}
            {filteredAndSortedBikes.length > 0 ? (
                <table className="table w-75 mx-auto table-striped bikes_list">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Confronta</th>
                            <th scope="col" onClick={() => handleSortAndOrder("title")}>
                                Modello {sortBy === "title" && (sortOrder === 1 ? "▲" : "▼")}
                            </th>
                            <th scope="col" onClick={() => handleSortAndOrder("category")}>
                                Categoria {sortBy === "category" && (sortOrder === 1 ? "▲" : "▼")}
                            </th>
                            <th scope="col" className="text-center">Vedi dettaglio</th>
                            <th scope="col" className="text-center">Preferiti</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAndSortedBikes.map((b) => (
                            <BikeRow
                                key={b.id}
                                id={b.id}
                                title={b.title}
                                category={b.category}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center mt-4">
                    <p>Nessuna bici trovata</p>
                </div>
            )}
        </div>
    );
}