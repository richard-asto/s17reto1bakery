/*--- src/components/reviews/Footer.jsx ---*/
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Footer = () => {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !text.trim()) return;

        setReviews([
            ...reviews,
            {
                id: Date.now(),
                name,
                text,
            },
        ]);

        setName("");
        setText("");
    };

    const handleDelete = (id) => {
        setReviews(reviews.filter((review) => review.id !== id));
    };

    return (
        <footer>
            <div className="container">
                <h4>Custommer Reviews</h4>

                <div className="footer__content">
                    <ReviewForm
                        name={name}
                        text={text}
                        onNameChange={setName}
                        onTextChange={setText}
                        onSubmit={handleSubmit}
                    />

                    <ReviewList
                        reviews={reviews}
                        onDelete={handleDelete}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

