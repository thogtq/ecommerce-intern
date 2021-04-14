import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import ColorPicker from "components/ColorPicker";
import QuantityPicker from "components/QuantityPicker";
import SiteButton from "components/SiteButton";
import SizePicker from "components/SizePicker";
import { ReviewStarts } from "../../components/ReviewStars";
const useStyles = makeStyles({
  root: {
    gap: "28px",
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
const TitleGroup = (props) => {
  const classes = useStyles();
  return (
    <Grid className="title-group">
      <div className="product-name">{props.name}</div>
      <div className="price">$99.00</div>
      <Grid className="review" container>
        <ReviewStarts />
        <Divider
          orientation="vertical"
          flexItem
          classes={{ root: classes.reviewDivider }}
        />
        0 Review
      </Grid>
    </Grid>
  );
};
const SizeInput = () => {
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
        <SizePicker size="S" />
        <SizePicker size="M" />
        <SizePicker size="L" />
      </Grid>
    </Grid>
  );
};
const ColorInput = () => {
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
        <ColorPicker color="Red" />
        <ColorPicker color="Green" />
        <ColorPicker color="Yellow" />
        <ColorPicker color="Black" />
      </Grid>
    </Grid>
  );
};
export default function ProductDetails(props) {
  const { product } = props;
  const classes = useStyles();
  return (
    <Grid
      classes={{ root: classes.root }}
      className="product-details"
      container
      direction="column"
    >
      <TitleGroup name={product.name} price={product.price} />
      <SizeInput />
      <ColorInput />
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ gap: "20px" }}
      >
        <Grid className="attribute-name">Quantity</Grid>
        <QuantityPicker className="attribute-name" defaultValue={1} />
      </Grid>
      <SiteButton
        name="Add to cart"
        width="100%"
        height="50px"
        color="#ffffff"
        weight="Bold"
        backgroundColor="#5f6dff"
      />
      <Divider />
      <Typography className="description">
        Model wearing size S<br />- Chest: 36”
        <br />- Length: 25.75”
      </Typography>
    </Grid>
  );
}
