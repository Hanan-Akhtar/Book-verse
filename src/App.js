import HandleRoute from "./Routes/Routes";
import Stripe from "./Stripe/Stripe";
import { CartProvider } from "./component/CartContext";
function App() {
  return (
    <CartProvider>
      {/* <HandleRoute /> */}
      <Stripe/>
    </CartProvider>
  );
}

export default App;
