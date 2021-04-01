import bigBannerImg from "../images/homepage/big_banner.jpg";
import menCategoryImg from "../images/homepage/men_category.jpg";
import ladiesCategoryImg from "../images/homepage/ladies_category.jpg";
import girlsCategoryImg from "../images/homepage/girls_category.jpg";
import boysCategoryImg from "../images/homepage/boys_category.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
function Body() {
  return (
    <div className="container">
      <BigBanner />
      <CategoryBanners />
    </div>
  );
}
function BigBanner() {
  return (
    <div className="big-banner">
      <img src={bigBannerImg} alt="big-banner-image"></img>
      <div className="banner-slogan">OUTFIT OF THE WEEK</div>
      <a href="">
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
        <div className="category-btn">
          <button className="btn-shop-now">Shop now</button>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
