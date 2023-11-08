import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-lg shadow-lg"
    >
      {children}
      <form method="dialog" className="mt-6 flex justify-end">
        <Button label="Close" />
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
