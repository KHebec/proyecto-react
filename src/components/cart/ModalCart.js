import "./Modal.css";
import { Button } from "./../button/Button";

const ModalCart = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        {children}
      </div>

      <div className="fixed bottom-0 right-10">
        <Button name="Cerrar" click={closeModal} bg={"bg-[#bb2211]"} />
      </div>
    </article>
  );
};

export default ModalCart;
