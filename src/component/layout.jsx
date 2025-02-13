import Header from "./header";
import Footer from "./footer";

function DefaultLayout({ children, cartItems }) {
  return (
    <div className="flex max-h-screen flex-col">
      <Header cartItems={cartItems} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
