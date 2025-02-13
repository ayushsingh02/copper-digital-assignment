import Products from "../component/products";

const Home = ({ products, addToCart }) => {
  return (
    <div>
      <div className="hero">

        {/* <img className="pt-8" src="/assets/img/banner-3.png" alt="Logo" /> */}
        <h1 className="hero-text">COPPER DIGITAL ASSIGNMENT</h1>
      </div>
      <Products products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
