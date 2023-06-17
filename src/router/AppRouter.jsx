import { Routes, Route } from "react-router-dom";
import { Details } from "../pages/DetailsMovie/Details";
import { Home } from "../pages/Home/Home";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movieDetails/:id'  element={<Details />}/>
      </Routes>
    </>
  );
};
