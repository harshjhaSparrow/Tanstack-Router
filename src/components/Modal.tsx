import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export const Modal: React.FC<{ children: ReactNode }> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal-root")!
  );
};
