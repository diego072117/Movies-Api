import { Link } from "react-router-dom";
import "./NotFound.scss";

export const NotFound = () => {
  return (
    <>
      <div className="options-detail">
        <Link to="/" className="arrow-exit">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
      <div className="container-error">
        <div className="error">404</div>
        <div className="not-found">Not Fount</div>
      </div>
    </>
  );
};
