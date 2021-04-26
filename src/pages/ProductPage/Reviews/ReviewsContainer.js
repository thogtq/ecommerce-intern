import { Grid, makeStyles } from "@material-ui/core";
import { ReviewStars } from "components/ReviewStars";
import SimplePagination from "components/SimplePagination";
import { AuthContext } from "contexts/store";
import { useContext, useEffect, useState } from "react";
import { getReviews } from "services/ReviewService";
import ReviewForm from "./ReviewForm";
import { shortMonth } from "constants/date";
import { deleteReview } from "../../../services/ReviewService";

const useStyles = makeStyles({});
export default function ReviewsContainer({ product }) {
  const [pages, setPages] = useState(1);
  const [filter, setFilter] = useState({
    productID: product.productID,
    page: 1,
    limit: 3,
  });
  const [review, setReview] = useState({
    productID: product.productID,
    fullname: "You",
    title: "",
    content: "",
    star: 0,
    valid: false,
  });
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authState] = useContext(AuthContext);
  const ReviewsPaginationTop = () => {
    return (
      <Grid container justify="flex-end">
        <SimplePagination
          onChange={handlePageChange}
          page={filter.page}
          max={pages}
        />
      </Grid>
    );
  };
  useEffect(() => {
    const fetchReviews = async () => {
      let res = await getReviews(filter);
      if (res.status === "success") {
        if (res.pages || res.data.reviews.length) {
          if (authState.token) {
            setReviews(
              res.data.reviews.filter((item) => {
                if (item.userID === authState.user.userID) {
                  setReview({ ...item, valid: true, fullname: "You" });
                  return false;
                } else {
                  return true;
                }
              })
            );
          } else {
            setReviews(res.data.reviews);
          }
          setPages(res.data.pages);
        }
        setLoading(false);
      } else {
        console.log(res);
      }
    };
    fetchReviews();
  }, [filter]);
  useEffect(() => {
    setFilter({ ...filter, productID: product.productID });
    setReviews([]);
    setReview({
      productID: product.productID,
      fullname: "You",
      title: "",
      content: "",
      star: 0,
      valid: false,
    });
    setPages(1);
  }, [product]);
  const handleUserReviewEdit = () => {
    setReview({ ...review, valid: false, edit: true });
  };
  const handleUserReviewDelete = async (reviewID) => {
    let res = await deleteReview(reviewID);
    if (res.status === "success") {
      setReview({
        ...review,
        fullname: "",
        title: "",
        star: 0,
        content: "",
        valid: false,
      });
    } else {
      alert(res.error.message);
    }
  };
  const handlePageChange = (value) => {
    setFilter({ ...filter, page: parseInt(value) });
  };
  return loading ? (
    ""
  ) : (
    <div className="reviews-container">
      {reviews.length === 0 && !authState.token ? (
        <NoReviews />
      ) : (
        <Grid
          classes={{ root: "reviews-wrapper" }}
          container
          direction="column"
        >
          {authState.token ? (
            review.valid ? (
              <UserReviewItem
                review={review}
                onDelete={handleUserReviewDelete}
                onEdit={handleUserReviewEdit}
              />
            ) : (
              <ReviewForm
                product={product}
                review={review}
                setReview={setReview}
              />
            )
          ) : (
            <ReviewsPaginationTop />
          )}
          {reviews.map((review) => (
            <ReviewItem key={review.reviewID} review={review} />
          ))}
          <Grid classes={{ root: "reviews-pagination" }}>
            <SimplePagination
              page={filter.page}
              max={pages}
              onChange={handlePageChange}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
const UserReviewItem = ({ review, onDelete, onEdit }) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(review.reviewID);
    }
  };
  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };
  return (
    <Grid classes={{ root: "reviews-item-wrapper" }} item xs container>
      <Grid classes={{ root: "header-box" }} item xs={2}>
        <div className="fullname">{review.fullname}</div>
        <div className="header-box-action">
          <span onClick={handleEdit}>Edit</span> |{" "}
          <span onClick={handleDelete}>Delete</span>
        </div>
      </Grid>
      <Grid classes={{ root: "content-box" }} item xs>
        <div className="review-title">{review.title}</div>
        <ReviewStars star={review.star} disabled />
        <div className="review-content">{review.content}</div>
      </Grid>
    </Grid>
  );
};
const ReviewItem = ({ review }) => {
  const reviewDate = new Date(review.reviewDate);
  const month = shortMonth[reviewDate.getMonth()];
  return (
    <Grid classes={{ root: "reviews-item-wrapper" }} item xs container>
      <Grid classes={{ root: "header-box" }} item xs={2}>
        <div className="fullname">{review.fullname}</div>
        <div className="review-date">{reviewDate.getDate() + " " + month}</div>
      </Grid>
      <Grid classes={{ root: "content-box" }} item xs>
        <div className="review-title">{review.title}</div>
        <ReviewStars star={review.star} disabled />
        <div className="review-content">{review.content}</div>
      </Grid>
    </Grid>
  );
};
const NoReviews = () => {
  const classes = useStyles();
  return (
    <Grid
      classes={{ root: "no-reviews" }}
      className="text-regular-grey"
      container
      justify="center"
      alignItems="center"
    >
      No reviews
    </Grid>
  );
};
