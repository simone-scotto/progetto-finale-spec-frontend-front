import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function DefaultLayout() {

    const { favourites } = useContext(GlobalContext);

    return (
        <>

            <header>
                <nav>
                    <div className="container p-0 h-100">
                        <div className="row m-0 h-100 ">
                            <div className="col p-0">
                                <ul className="d-flex gap-3 align-items-center h-100">
                                    <NavLink to="/" className="navlink-reset"><li>Home Page</li></NavLink>
                                    <NavLink to="/bikes" className="navlink-reset"><li>Bikes</li></NavLink>

                                </ul>
                            </div>
                            <div className="col p-0 d-flex justify-content-center align-items-center">
                                <p className="d-inline-block m-0">LOGO</p>
                            </div>
                            <div className="col p-0 d-flex justify-content-end align-items-center">


                                <NavLink to="/bikes/favourites" className="navlink-reset" >
                                    <div className="position-relative">
                                        <i className="bi bi-heart-fill"></i>
                                        {favourites.length > 0 && (
                                            <span
                                                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                                style={{ fontSize: "0.7rem" }}
                                            >
                                                {favourites.length}
                                            </span>
                                        )}
                                    </div>
                                </NavLink>

                            </div>
                        </div>
                    </div>

                </nav>


            </header >
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    );
}