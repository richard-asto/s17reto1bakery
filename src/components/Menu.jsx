/*--- src/components/Menu.jsx ---*/
import menu1 from "../assets/square-1.jpg";
import menu2 from "../assets/square-2.jpg";
import menu3 from "../assets/square-3.jpg";
import menu4 from "../assets/square-4.jpg";

const Menu = () => {
    return (
        <section className="menu">
            <div className="container">
                <div className="row">
                    <div className="image-group padding-right">
                        <img src={menu1} alt="menu item" />
                        <img src={menu2} alt="menu item" />
                        <img src={menu3} alt="menu item" />
                        <img src={menu4} alt="menu item" />
                    </div>

                    <div className="description padding-right">
                        <div className="global-headline">
                            <h2 className="sub-headline">Explore</h2>
                            <h3 className="headline headline-dark">Menu</h3>
                            <div className="asterisk">*</div>
                        </div>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Adipisci voluptatum dolor earum accusamus suscipit.
                        </p>

                        <a href="#" className="btn btn-secondary">
                            See Full Menu
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
