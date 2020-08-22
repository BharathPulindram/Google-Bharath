import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
/* import UseGoogleSearch from "../Components/UseGoogleSearch"; */
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar } from "@material-ui/core";
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
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchPage__results">
        <p className="searchPage__resultCount">
          About 25000 results 0.5s for <span>{term}</span>
        </p>
        <div className="searchPage__result">
          <a href="https://www.linkedin.com/in/bharath-kumar-pulindram-0324a6169/">
            in.linkedin.com
          </a>
          <a
            className="searchPage__resultTitle"
            href="https://www.linkedin.com/in/bharath-kumar-pulindram-0324a6169/"
          >
            <Avatar src="https://pbs.twimg.com/profile_images/1185858244389957633/6SoMTZGE.jpg" />
            <h2>LinkedIn</h2>
          </a>
          <p className="searchPage__resultSnippet">
            675 million+ members | Manage your professional identity. Build and
            engage ... You've visited this page many times. Last visit: 21/8/20
          </p>
        </div>
        <div className="searchPage__result">
          <a href="https://www.facebook.com/">www.facebook.com</a>
          <a
            className="searchPage__resultTitle"
            href="https://www.facebook.com/"
          >
            <Avatar src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" />
            <h2>Facebook - Log In or Sign Up</h2>
          </a>
          <p className="searchPage__resultSnippet">
            Create an account or log into Facebook. Connect with friends, family
            and other people you know. Share photos and videos, send messages
            and get updates.
          </p>
        </div>

        <div className="searchPage__result">
          <a href="https://www.instagram.com/">www.instagram.com</a>
          <a
            className="searchPage__resultTitle"
            href="https://www.instagram.com/"
          >
            <Avatar src="https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png" />
            <h2>Instagram</h2>
          </a>
          <p className="searchPage__resultSnippet">
            Create an account or log in to Instagram - A simple, fun & creative
            way to capture, edit & share photos, videos & messages with friends
            & family.
          </p>
        </div>
        <div className="searchPage__result">
          <a href="https://web.whatsapp.com/">web.whatsapp.com</a>
          <a
            className="searchPage__resultTitle"
            href="https://web.whatsapp.com/"
          >
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/597px-WhatsApp.svg.png" />
            <h2>WhatsApp Web</h2>
          </a>
          <p className="searchPage__resultSnippet">
            Quickly send and receive WhatsApp messages right from your computer.
            You've visited this page many times. Last visit: 30/7/20
          </p>
        </div>
        <div className="searchPage__result">
          <a href="https://twitter.com/Bharath_PBK7">twitter.com</a>
          <a
            className="searchPage__resultTitle"
            href="https://twitter.com/Bharath_PBK7/"
          >
            <Avatar src="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png" />
            <h2>Twitter. It's what's happening.</h2>
          </a>
          <p className="searchPage__resultSnippet">
            From breaking news and entertainment to sports and politics, get the
            full story with all the live commentary.
          </p>
        </div>
        <div className="searchPage__result">
          <a href="https://www.youtube.com/">www.youtube.com</a>
          <a
            className="searchPage__resultTitle"
            href="https://www.youtube.com/"
          >
            <Avatar src="https://i.pinimg.com/originals/de/1c/91/de1c91788be0d791135736995109272a.png" />
            <h2>YouTube</h2>
          </a>
          <p className="searchPage__resultSnippet">
            Enjoy the videos and music you love, upload original content, and
            share it all with friends, family, and the world on YouTube.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
