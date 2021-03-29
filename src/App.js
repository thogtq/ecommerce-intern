import "./App.css";
import logo from "./images/logo.svg";
import searchIcon from "./images/icons/search.svg";
import cartIcon from "./images/icons/cart.svg";
import arrowIcon from "./images/icons/arrow.svg";
import bigBannerImg from "./images/homepage/big_banner.jpg";
import menCategoryImg from "./images/homepage/men_category.jpg";
import ladiesCategoryImg from "./images/homepage/ladies_category.jpg";
import girlsCategoryImg from "./images/homepage/girls_category.jpg";
import boysCategoryImg from "./images/homepage/boys_category.jpg";
function Homepage() {
  return (
    <div>
      <Header />
      <div className="container">
        <BigBanner />
        <CategoryBanners />
      </div>
      <Footer />
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <hr className="line"></hr>
      <div className="footer-row">
        <FooterRow1 />
      </div>
      <div className="footer-row2">
        <FooterRow2 />
      </div>
    </div>
  );
}
// function FooterRow
function Header() {
  return (
    <div className="header">
      <div className="header-row">
        <SearchBar />
        <img src={logo} className="site-logo" alt="logo" />
        <Menu />
      </div>
      <hr className="line"></hr>
      <div className="header-category">
        <ListCategory />
      </div>
      <hr className="line"></hr>
    </div>
  );
}
function Menu() {
  return (
    <div className="header-menu">
      <a href="#">Register</a>
      <button>Login</button>
      <a href="#">
        <img src={cartIcon}></img>
      </a>
    </div>
  );
}
function SearchBar() {
  return (
    <div className="header-searchbar">
      <input placeholder="Search"></input>
      <img className="search-icon" src={searchIcon} alt="search-icon" />
    </div>
  );
}
function ListCategory() {
  return (
    <ul>
      <li>
        <a href="#">
          Men <img src={arrowIcon} alt="arrow-icon"></img>
        </a>
      </li>
      <li>
        <a href="#">
          Ladies<img src={arrowIcon} alt="arrow-icon"></img>
        </a>
      </li>
      <li>
        <a href="#">
          Girls<img src={arrowIcon} alt="arrow-icon"></img>
        </a>
      </li>
      <li>
        <a href="#">
          Boys <img src={arrowIcon} alt="arrow-icon"></img>
        </a>
      </li>
    </ul>
  );
}
function BigBanner() {
  return (
    <div className="big-banner">
      <img src={bigBannerImg} alt="big-banner-image"></img>
      <div className="banner-slogan">OUTFIT OF THE WEEK</div>
      <a href="#">
        <button className="btn-shop-now">Shop now</button>
      </a>
    </div>
  );
}
//List of category banner
function CategoryBanners() {
  return (
    <div className="category-banners">
      <CategoryBanner categoryImg={menCategoryImg} categoryName="Men" />
      <CategoryBanner categoryImg={ladiesCategoryImg} categoryName="Ladies" />
      <CategoryBanner categoryImg={girlsCategoryImg} categoryName="Girls" />
      <CategoryBanner categoryImg={boysCategoryImg} categoryName="Boys" />
    </div>
  );
}
//Single banner UI
function CategoryBanner(props) {
  return (
    <div className="category-banner">
      <img src={props.categoryImg} atl="category image"></img>
      <div className="attribute-group">
        <div className="category-name">{props.categoryName}</div>
        <hr className="category-line"></hr>
        <button className="btn-shop-now">Shop now</button>
      </div>
    </div>
  );
}
export default Homepage;
