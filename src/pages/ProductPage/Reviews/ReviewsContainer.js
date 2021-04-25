import { Grid, makeStyles } from "@material-ui/core";
import { ReviewStars } from "components/ReviewStars";
import SimplePagination from "components/SimplePagination";
import SiteButton from "components/SiteButton";
import { AuthContext } from "contexts/store";
import { useContext } from "react";

const useStyles = makeStyles({});
export default function ReviewsContainer() {
  const [authState] = useContext(AuthContext);
  const classes = useStyles();
  const ReviewsPaginationTop = () => {
    return (
      <Grid container justify="flex-end">
        <SimplePagination page={1} max={7} />
      </Grid>
    );
  };
  return (
    <div className="reviews-container">
      <Grid classes={{ root: "reviews-wrapper" }} container direction="column">
        {authState.token ? <ReviewForm /> : <ReviewsPaginationTop />}
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <Grid classes={{ root: "reviews-pagination" }}>
          <SimplePagination page={1} max={7} />
        </Grid>
      </Grid>
    </div>
  );
}
const ReviewItem = () => {
  return (
    <Grid classes={{ root: "reviews-item-wrapper" }} item xs container>
      <Grid classes={{ root: "header-box" }} item xs={2}>
        <div className="fullname">Amber Arnold</div>
        <div className="review-date">30 Jul</div>
      </Grid>
      <Grid classes={{ root: "content-box" }} item xs>
        <div className="review-title">Adorable but tight!!</div>
        <ReviewStars star={4} disabled />
        <div className="review-content">
          I purchased this dress thinking it fit loose as pictured, but it fits
          like a glove, although i still love the still and its very cute
        </div>
      </Grid>
    </Grid>
  );
};
const ReviewForm = () => {
  return (
    <Grid
      classes={{ root: "reviews-item-wrapper review-form" }}
      item
      xs
      container
    >
      <Grid classes={{ root: "header-box" }} item xs={2}>
        <div className="fullname">You</div>
      </Grid>
      <Grid classes={{ root: "content-box" }} item xs>
        <form>
          <input type="text" className="title-input" placeholder="TITLE" />
          <textarea
            placeholder="Add your comment here..."
            className="content-input"
            rows={6}
          ></textarea>
          <Grid
            classes={{ root: "review-form-footer" }}
            container
            direction="row"
            justify="space-between"
          >
            <Grid item>
              <div className="rating-for-us">*Rating for us: </div>
              <ReviewStars star={0} />
            </Grid>
            <Grid item>
              <SiteButton
                name="Submit"
                width="120px"
                height="35px"
                color="#ffffff"
                weight="SemiBold"
                backgroundColor="#ffa15f"
                disabled
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
const NoReviews = () => {
  const classes = useStyles();
  return (
    <Grid
      classes={{ root: classes.noReviews }}
      className="text-regular-grey"
      container
      justify="center"
      alignItems="center"
    >
      No reviews
    </Grid>
  );
};
