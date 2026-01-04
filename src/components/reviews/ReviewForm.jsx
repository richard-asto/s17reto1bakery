/*--- src/components/reviews/ReviewForm.jsx ---*/
const ReviewForm = ({
    name,
    text,
    onNameChange,
    onTextChange,
    onSubmit,
}) => {
    return (
        <form className="newsletter-form" onSubmit={onSubmit}>
            <div className="newsletter-form-box">
                <input
                    type="text"
                    className="newsletter-input"
                    placeholder="Your name..."
                    value={name}
                    onChange={(e) => onNameChange(e.target.value)}
                />
            </div>

            <div className="newsletter-form-box">
                <input
                    type="text"
                    className="newsletter-input"
                    placeholder="Reviews..."
                    value={text}
                    onChange={(e) => onTextChange(e.target.value)}
                />
            </div>

            <button className="newsletter-btn" type="submit">
                SEND
            </button>
        </form>
    );
};

export default ReviewForm;
