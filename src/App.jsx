import { BrowserRouter, Route, Routes } from "react-router-dom";
import Winners from "./pages/Winners";
import PageNotFound from "./pages/PageNotFound";
import Garage from "./pages/Garage";
import { getCars } from "./services/API";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function App() {
  const { data: cars = [], isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
    refetchOnWindowFocus: true,
  });

  console.log(cars, isLoading);
  const [carList, setCarList] = useState(cars);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Garage cars={cars} setCars={setCarList} />} />
        <Route path="/winners" element={<Winners />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
