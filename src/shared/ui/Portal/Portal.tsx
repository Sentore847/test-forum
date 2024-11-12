import { ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: ReactNode;
  container?: Element;
}

export const Portal = ({
  children,
  container = document.body,
}: PortalProps) => {
  return ReactDOM.createPortal(children, container);
};
