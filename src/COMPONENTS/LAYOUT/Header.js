import { Fragment } from 'react';

import HeaderCartButton from '../LAYOUT/HeaderCartButton';
import foodimage from '../../assets/food.jpeg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>FoodDelivery</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className= {classes['main-image']} >
            <img src={foodimage} alt='foodImage' />
        </div>
    </Fragment>
};

export default Header;


