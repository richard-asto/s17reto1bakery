/*--- src/App.jsx ---*/
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import AlwaysFresh from "./components/AlwaysFresh";
import Menu from "./components/Menu";
import Tasty from "./components/Tasty";
import Delight from "./components/Delight";
import Footer from "./components/reviews/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <OurStory />
      <AlwaysFresh />
      <Menu />
      <Tasty />
      <Delight />
      <Footer />
    </>
  );
}

export default App;
