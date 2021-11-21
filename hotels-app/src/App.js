import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, useParams } from "react-router-dom";
import HotelsGallery from "./components/HotelsGallery";
import HotelPage from "./components/HotelPage";
import data from './assets/hotels.json'


function App() {
  
  
  return (
    <>
      <Routes>
        <Route path="/" element={<HotelsGallery />} />
        {data.map(({ name, street, house, phone, img }, index) => (
							<Route
								key={index}
								path={`/${encodeURIComponent(name.split(" ").join("-"))}`}
								element={
									<HotelPage
										name={name}
										street={street}
										house={house}
										phone={phone}
                    img={img}
									/>
								}
							/>
						))}
      </Routes>
    </>
  );
}

export default App;
