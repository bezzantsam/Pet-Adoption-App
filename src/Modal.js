import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    eRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementsById("modal");
    modalRoot.appendChild(elRef.current);
  }, []);
};
