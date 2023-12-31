import { useContext } from 'react';
import CartIcon from "../CART/CartIcon";
import CartContext from '../../STORE/Cart-Context';
import classes from '../LAYOUT/HeaderCartButton';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
  
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
  
    return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    );
  };
  
  export default HeaderCartButton;



