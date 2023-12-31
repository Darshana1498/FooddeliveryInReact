import { useRef, useState } from 'react';

import Input from '../../UI/INPUT/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enterAmount = amountInputRef.current.value
        const enteredAmountNumber = +enterAmount;

        if (
            enterAmount.trim().length === 0 || 
            enteredAmountNumber < 1 || 
            enteredAmountNumber > 5
            ) {
              setAmountIsValid(false);  
              return;
        }

        props.onAddToCart(enteredAmountNumber);

    };

    return <form className={classes.form} onSubmit={submitHandler}>
      <Input 
        ref={amountInputRef} 
        label='Amount'
        input={{
            id: 'amount' + props.id, // this changed!
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }} /> 
        <button>+ Add</button>
        {!amountIsValid && <p>Please Enter a valid amount (1-5).</p>}
    </form>
};

export default MealItemForm;



