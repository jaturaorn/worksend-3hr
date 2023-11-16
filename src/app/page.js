import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import CardProduct from "./component/CardProduct";
import CardProduct2 from "./component/CardProduct2";
import CardProduct3 from "./component/CardProduct3";
import Footertop from "./component/Footertop";
import Footerbottom from "./component/Footerbottom";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardProduct />
      <CardProduct2 />
      <CardProduct3 />
      <Footertop />
      <Footerbottom />
    </>
  );
}
