import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface AreYouSureModalProps {
  id?: number;
  title: string;
  content: string;
  showCard: boolean;
  onConfirmMessage: string;
  onConfirm: (id?: number) => void;
  onClose: () => void;
}

export function AreYouSureModal({
  content,
  onConfirm,
  onClose,
  title,
  showCard,
  id,
  onConfirmMessage,
}: AreYouSureModalProps) {
  const [show, setShow] = useState(showCard);

  const handleClose = () => {
    onClose();
    setShow(false);
  };

  const handleConfirm = () => {
    onConfirm(id);
    setShow(false);
  };
  return (
    <Modal show={show} onHide={handleClose} animation={true}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          {onConfirmMessage}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
