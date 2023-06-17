import { Routes, Route } from "react-router-dom";
import { Details } from "../pages/DetailsMovie/Details";
import { Home } from "../pages/Home/Home";
import { NotFound } from "../pages/NotFound/NotFound";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/movieDetails/:id'  element={<Details />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};
