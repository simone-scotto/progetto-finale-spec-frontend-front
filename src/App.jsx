import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage"
import BikesPage from "./pages/BikesPage";
import BikeDetailsPage from "./pages/BikeDetailsPage";
import FavouritesPage from "./pages/FavouritesPage";
import GlobalProvider from "./context/GlobalContext";
import ComparePage from "./pages/ComparePage";



function App() {


  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/bikes" element={<BikesPage />} />
              <Route path="/bikes/:id" element={<BikeDetailsPage />} />
              <Route path="/bikes/favourites" element={<FavouritesPage />} />
              <Route path="/bikes/compare" element={<ComparePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>

    </>
  )
}

export default App
