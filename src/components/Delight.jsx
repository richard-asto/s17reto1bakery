/*--- src/components/Delight.jsx ---*/
import baker1 from "../assets/bakers-delight-1.jpg";
import baker2 from "../assets/bakers-delight-2.jpg";


const Delight = () => {
    return (
        <section className="delight">
            <div className="container">
                <div className="row">
                    <div className="description padding-right">
                        <div className="global-headline">
                            <h2 className="sub-headline">Baker's</h2>
                            <h3 className="headline headline-dark">Delight</h3>
                            <div className="asterisk">*</div>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Adipisci voluptatum dolor earum accusamus suscipit.
                        </p>

                        <a href="#" className="btn btn-secondary">
                            Make A Reservation
                        </a>
                    </div>

                    <div className="image-group">
                        <img
                            src={baker1}
                            alt="bread"
                        />
                        <img
                            src={baker2}
                            alt="bread"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Delight;
