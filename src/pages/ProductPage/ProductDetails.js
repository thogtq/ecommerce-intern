import { Divider, Grid, makeStyles } from "@material-ui/core";
import ColorPicker from "components/ColorPicker";
import QuantityPicker from "components/QuantityPicker";
import SiteButton from "components/SiteButton";
import SizePicker from "components/SizePicker";
import { useState, useContext, useEffect } from "react";
import { ReviewStars } from "../../components/ReviewStars";
import { addToCart } from "services/CartService";
import uuid from "react-uuid";
import { CartContext } from "contexts/store";
const useStyles = makeStyles({
  root: {
    gap: "28px",
    marginLeft: "70px",
    marginRight: "121px",
  },
  reviewDivider: {
    margin: "0px 10px",
  },
  detailsDivider: {
    margin: "25px 0",
  },
  labelMargnBottom: {
    marginBottom: "9px",
  },
});

export default function ProductDetails({ ...props }) {
  const [cart, cartDispatch] = useContext(CartContext);
  const [disabled, setDisabled] = useState(false);
  const { product } = props;
  const [productCart, setProductCart] = useState({
    productID: product.productID,
    name: product.name,
    quantity: 1,
  });
  useEffect(() => {
    setProductCart({
      productID: product.productID,
      name: product.name,
      quantity: 1,
    });
  }, [product]);
  const classes = useStyles();
  const handleAddCart = (e) => {
    setDisabled(true);
    if (
      (product.sizes.length !== 0 && !productCart.size) ||
      (product.colors.length !== 0 && !productCart.color)
    ) {
      alert("Please select attributes");
      setDisabled(false);
      return;
    }
    setProductCart({ ...productCart, id: uuid() });
    addToCart(cartDispatch, cart, productCart);
    setProductCart({ ...productCart, size: "", color: "", quantity: 1 });
    alert("Product has been added to cart");
    setDisabled(false);
    window.scrollTo(0, 0);
  };
  const handleQuantityChange = (value) => {
    setProductCart({ ...productCart, quantity: value });
  };
  return (
    <Grid
      classes={{ root: classes.root }}
      className="product-details"
      container
      direction="column"
    >
      <TitleGroup product={product} />
      <SizeInput
        sizes={product.sizes}
        productCart={productCart}
        setProductCart={setProductCart}
      />
      <ColorInput
        colors={product.colors}
        productCart={productCart}
        setProductCart={setProductCart}
      />
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ gap: "20px" }}
      >
        <Grid className="attribute-name">Quantity</Grid>
        <QuantityPicker
          className="attribute-name"
          value={productCart.quantity}
          onChange={handleQuantityChange}
        />
      </Grid>
      <SiteButton
        name="Add to cart"
        width="100%"
        height="50px"
        color="#ffffff"
        weight="Bold"
        backgroundColor="#5f6dff"
        onClick={handleAddCart}
        disabled={disabled}
      />
      <Divider />
      <pre className="description">{product.description}</pre>
    </Grid>
  );
}
const TitleGroup = ({ product }) => {
  const classes = useStyles();
  return (
    <Grid className="title-group">
      <div className="product-name">{product.name}</div>
      <div className="price">${product.price}.00</div>
      <Grid className="review" container>
        <ReviewStars star={product.star} disabled />
        <Divider
          orientation="vertical"
          flexItem
          classes={{ root: classes.reviewDivider }}
        />
        {product.reviews + " Reviews"}
      </Grid>
    </Grid>
  );
};
const SizeInput = ({ sizes, productCart, setProductCart }) => {
  const handleSizeClick = (value) => {
    setProductCart({
      ...productCart,
      size: value === productCart.size ? "" : value,
    });
  };
  const classes = useStyles();
  return (
    <Grid>
      <Grid
        classes={{ root: classes.labelMargnBottom }}
        className="attribute-name"
      >
        Size
      </Grid>
      <Grid container style={{ gap: "16px" }}>
        {sizes.map((size) => (
          <SizePicker
            active={productCart.size === size}
            key={size}
            size={size}
            onClick={handleSizeClick}
          />
        ))}
      </Grid>
    </Grid>
  );
};
const ColorInput = ({ colors, productCart, setProductCart }) => {
  const handleColorClick = (value) => {
    setProductCart({
      ...productCart,
      color: value === productCart.color ? "" : value,
    });
  };
  const classes = useStyles();
  return (
    <Grid>
      <Grid
        classes={{ root: classes.labelMargnBottom }}
        className="attribute-name"
      >
        Color
      </Grid>
      <Grid container style={{ gap: "16px" }}>
        {colors.map((color) => (
          <ColorPicker
            active={productCart.color === color}
            key={color}
            color={color}
            onClick={handleColorClick}
          />
        ))}
      </Grid>
    </Grid>
  );
};
