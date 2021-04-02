import Header from "../components/Header";
import Footer from "../components/Footer";
import reactDom from "react-dom";
import React from "react";
function ProductList() {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
}
function Body() {
  return (
    <div className="container">
      <div></div>
    </div>
  );
}
const BreadCrum = (props) => {
  const handleClick = () => {};
  return (
    <React.Fragment>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          {props.parentCategory}
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Core
        </Link>
      </Breadcrumbs>
    </React.Fragment>
  );
};
export default ProductList;
