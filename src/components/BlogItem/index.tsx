import { useState } from "react";
import "./styles.css";
import Card from "react-bootstrap/Card";
import { AreYouSureModal } from "../AreYouSureModal";
import { useNavigate } from "react-router-dom";

interface BlogItemProps {
  id: number;
  title: string;
  content: string;
  picture: string;
}

export function BlogItem({ content, picture, title, id }: BlogItemProps) {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  function handleClose() {
    setShow(false);
    return;
  }

  function handleCardClick() {
    console.log("Clicou no card");
    navigate(`/post/${id}`);
  }

  function handleEditClick(event: React.MouseEvent) {
    event.stopPropagation();
    console.log("Clicou no botão de editar");
    navigate(`/post/${id}/edit`);
  }

  function handleDeleteClick(event: React.MouseEvent) {
    event.stopPropagation();
    setShow(true);
    console.log("Clicou no botão de deletar");
  }

  function onConfirm(id?: number) {
    console.log("Deletou o post", id);
    setShow(false);
  }
  return (
    <Card
      className="text-black mt-5 border rounded card-click"
      onClick={handleCardClick}
    >
      <div className="ratio ratio-16x9">
        <Card.Img src={picture} alt="Card image" className="card-img-top" />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {content.length > 100 ? content.substring(0, 100) + "..." : content}
        </Card.Text>
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-primary" onClick={handleEditClick}>
            Editar
          </button>
          <button className="btn btn-danger" onClick={handleDeleteClick}>
            Deletar
          </button>
          {show && (
            <AreYouSureModal
              id={id}
              content="Tem certeza que deseja deletar esse post?"
              title="Deletar post"
              showCard={show}
              onConfirmMessage="Deletar"
              onConfirm={onConfirm}
              onClose={handleClose}
            />
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
