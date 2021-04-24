import bigBannerImg from "assets/images/homepage/big_banner.jpg";
import menCategoryImg from "assets/images/homepage/men_category.jpg";
import ladiesCategoryImg from "assets/images/homepage/ladies_category.jpg";
import girlsCategoryImg from "assets/images/homepage/girls_category.jpg";
import boysCategoryImg from "assets/images/homepage/boys_category.jpg";
import Header from "cores/Header/Header";
import Footer from "cores/Footer/Footer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { parentCategory } from "constants/product";

function Homepage() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <BigBanner />
        <CategoryBanners />
      </div>
      <Footer />
    </React.Fragment>
  );
}
function BigBanner() {
  return (
    <div className="big-banner">
      <img src={bigBannerImg} alt="big-banner"></img>
      <div className="banner-slogan">OUTFIT OF THE WEEK</div>
      <Link to="products/?category=Ladies">
        <button className="btn-shop-now">Shop now</button>
      </Link>
    </div>
  );
}
//List of category banner
function CategoryBanners() {
  return (
    <div className="category-banners">
      <CategoryBanner
        categoryImg={menCategoryImg}
        categoryName={parentCategory.Men}
      />
      <CategoryBanner
        categoryImg={ladiesCategoryImg}
        categoryName={parentCategory.Ladies}
      />
      <CategoryBanner
        categoryImg={girlsCategoryImg}
        categoryName={parentCategory.Girls}
      />
      <CategoryBanner
        categoryImg={boysCategoryImg}
        categoryName={parentCategory.Boys}
      />
    </div>
  );
}
//Single banner UI
function CategoryBanner(props) {
  return (
    <div className="category-banner">
      <img src={props.categoryImg} alt="category"></img>
      <div className="attribute-group">
        <div className="category-name">{props.categoryName}</div>
        <hr className="category-line"></hr>
        <div className="category-btn">
          <Link to={"/products/?category=" + props.categoryName}>
            <button className="btn-shop-now">Shop now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
