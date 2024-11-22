import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
  element?: Element;
}

export const Portal = ({ children, element = document.body }: PortalProps) => {
  return ReactDOM.createPortal(children, element);
};
