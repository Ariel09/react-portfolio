import ModalCss from './Modal.module.css'; // You'll need to create the corresponding CSS file

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className={ModalCss["modal-overlay"]} onClick={onClose}>
          <div className={ModalCss["modal-content"]} onClick={(e) => e.stopPropagation()}>
            <span className={ModalCss["modal-close"]} onClick={onClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;