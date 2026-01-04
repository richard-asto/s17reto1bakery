/*--- src/components/reviews/ReviewList.jsx ---*/
import ReviewCard from "./ReviewCard";

const ReviewList = ({ reviews, onDelete }) => {
    return (
        <div className="footer__container-card">
            {reviews.map((review) => (
                <ReviewCard
                    key={review.id}
                    review={review}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default ReviewList;
