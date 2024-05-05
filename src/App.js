import HandleRoute from "./Routes/Routes";
import { CartProvider } from "./component/CartContext";
function App() {
  return (
    <CartProvider>
      <HandleRoute />
    </CartProvider>
  );
}

export default App;
