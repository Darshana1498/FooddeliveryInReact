import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from '../MODAL/Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={onclose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onclose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;








// import { Fragment } from "react";
// import ReactDOM from "react-dom";

// import classes from "./Modal.module.css";

// const Backdrop = (props) => {
//   return <div className={classes.backdrop} onClick={props.onClose} />;
// };

// const ModalOverlay = (props) => {
//   console.log("Modal Rendering");
//   return (
//     <div className={classes.modal}>
//       <div className={classes.content}>{props.children}</div>
//     </div>
//   );
// };

// const portalElement = document.getElementById("overlays");

// const Modal = (props) => {
//   return (
//     props.show && (
//       <Fragment>
//         {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
//         {ReactDOM.createPortal(
//           <ModalOverlay>{props.children}</ModalOverlay>,
//           portalElement
//         )}
//       </Fragment>
//     )
//   );
// };

// export default Modal;
