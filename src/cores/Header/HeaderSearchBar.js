import searchIcon from "assets/images/icons/search.svg";
import { useEffect, useState, useRef } from "react";
import { debounce } from "helpers/helpers";
import {getProducts} from "../../services/ProductService";
import {
  ClickAwayListener,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const img =
  "http://localhost:8080/api/product/image/bVkoFBsUbD5XguyUae2GjX.jpg";

const HeaderSearchBar = () => {
  const searchInput = useRef(null);
  const [filter, setFilter] = useState({
    limit: 4,
    page: 1,
    search: "",
  });
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let res = await getProducts(filter);
      if (res.status === "success") {
        setProducts(res.data.products);
      } else {
        console.log(res.error.message);
      }
    };
    if (filter.search) {
      fetchProducts();
    } else {
      setProducts([]);
    }
  }, [filter]);
  const handleSearch = (e) => {
    setFilter({ ...filter, search: e.target.value });
  };
  const handleClickAway = () => {
    setProducts([]);
    searchInput.current.value = "";
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="header-searchbar">
        <input
          ref={searchInput}
          placeholder="Search"
          onChange={debounce(handleSearch, 300)}
        ></input>
        <List disablePadding classes={{ root: "search-list-root" }}>
          {products.map((product) => (
            <Link
              to={"/product/?productID=" + product.productID}
              key={product.productID}
            >
              <ListItem disableGutters classes={{ root: "search-item" }}>
                <ListItemIcon>
                  <img src={product.images[0]} alt="product-img" />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: "text-primary",
                    secondary: "text-secondary",
                  }}
                  primary={product.name}
                  secondary={product.brand + "  -  $" + product.price + ".00"}
                />
              </ListItem>
              <Divider />
            </Link>
          ))}
        </List>
        <img className="search-icon" src={searchIcon} alt="search-icon" />
      </div>
    </ClickAwayListener>
  );
};
export default HeaderSearchBar;
