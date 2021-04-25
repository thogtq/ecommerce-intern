import { Grid } from "@material-ui/core";
import { ReviewStars } from "components/ReviewStars";
import SiteButton from "components/SiteButton";
import { useState } from "react";
import { addReview } from "services/ReviewService";

export default function ReviewForm({ product, review, setReview }) {
  const [disabled, setDisabled] = useState(true);
  const handleStarChange = (value) => {
    setDisabled(false);
    setReview({ ...review, star: parseInt(value) });
  };
  const handleSubmit = async (e) => {
    if (review.edit) {
      console.log("Update review working soon");
      return;
    }
    setDisabled(true);
    let res = await addReview(review);
    if (res.status === "success") {
      setReview({ ...review, valid: true });
    } else {
      alert(res.error.message);
    }
    setDisabled(false);
  };
  const handleTitleChange = (e) => {
    if (e.target.value === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    setReview({ ...review, title: e.target.value });
  };
  const handleCancelEdit = () => {
    setReview({ ...review, edit: false, valid: true });
  };
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
        <input
          value={review.title}
          type="text"
          className="title-input"
          placeholder="TITLE"
          onChange={handleTitleChange}
        />
        <textarea
          value={review.content}
          placeholder="Add your comment here..."
          className="content-input"
          rows={6}
          onChange={(e) => {
            setReview({ ...review, content: e.target.value });
          }}
        ></textarea>
        <Grid
          classes={{ root: "review-form-footer" }}
          container
          direction="row"
          justify="space-between"
        >
          <Grid item>
            <div className="rating-for-us">*Rating for us: </div>
            <ReviewStars star={review.star} onChange={handleStarChange} />
          </Grid>
          <Grid item>
            <Grid container style={{ gap: "15px" }}>
              {review.edit ? (
                <SiteButton
                  name="Cancel"
                  width="120px"
                  height="35px"
                  color="#ffffff"
                  weight="SemiBold"
                  backgroundColor="#ffa15f"
                  onClick={handleCancelEdit}
                />
              ) : (
                ""
              )}
              <SiteButton
                name="Submit"
                width="120px"
                height="35px"
                color="#ffffff"
                weight="SemiBold"
                backgroundColor="#ffa15f"
                disabled={disabled}
                onClick={handleSubmit}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
