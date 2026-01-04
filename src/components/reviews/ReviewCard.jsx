/*--- src/components/reviews/ReviewCard.jsx ---*/
import estrella from "../../assets/estrellas.png";

const ReviewCard = ({ review, onDelete }) => {
    return (
        <div className="card">
            <div className="container__icon">
                <img
                    src={estrella}
                    className="card__star"
                    alt="stars"
                />

                <button
                    onClick={() => onDelete(review.id)}
                    style={{
                        background: "transparent",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                        fontSize: "16px",
                    }}
                >
                    ✕
                </button>
            </div>

            <p className="card__description">{review.text}</p>

            <div className="card__name">
                <span>{review.name}</span>
            </div>
        </div>
    );
};

export default ReviewCard;
