import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;








// import React from "react";
// import classes from "./Input.module.scss";

// const Input = React.forwardRef((props, ref) => {
//   return (
//     <div className={classes.input}>
//       <label htmlFor="amount">Amount</label>
//       <input
//         defaultValue={props.defaultValue}
//         ref={ref}
//         min={props.min}
//         id="amount"
//         type="number"
//       ></input>
//     </div>
//   );
// });

// export default Input;