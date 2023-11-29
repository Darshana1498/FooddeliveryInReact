import { useState } from 'react';

import Header from './COMPONENTS/LAYOUT/Header';
import Meals from './COMPONENTS/MEALS/Meals'
import Cart from './COMPONENTS/CART/Cart';
import CartProvider from './STORE/CartProvider';

// import './App.css';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;