/*--- src/components/OurStory.jsx ---*/
import story1 from "../assets/story-img.jpg";
const OurStory = () => {
    return (
        <section className="our-story">
            <div className="container">
                <div className="row">
                    <div className="description padding-right">
                        <div className="global-headline">
                            <h2 className="sub-headline">Discover</h2>
                            <h3 className="headline headline-dark">Our Story</h3>
                            <div className="asterisk">*</div>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Adipisci voluptatum dolor earum accusamus suscipit.
                        </p>

                        <a href="#" className="btn btn-secondary">Learn More</a>
                    </div>

                    <div className="image">
                        <img src={story1} className="story-img" alt="bread" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
