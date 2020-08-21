import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import UseGoogleSearch from "../Components/UseGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
function SearchPage() {
  const [{ term }, disapatch] = useStateValue();
  /* const {data} = UseGoogleSearch(term); */
  /* const data = Response; */
  //https://developers.google.com/custom-search/v1/using_rest
  // https://cse.google.com/cse/create/new
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            alt="google logo"
            src="https://cdn2.mhpbooks.com/2016/02/google.jpg"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>
      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
