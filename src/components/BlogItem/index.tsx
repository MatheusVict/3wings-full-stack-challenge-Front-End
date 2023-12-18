import "./styles.css";
import Card from "react-bootstrap/Card";

interface BlogItemProps {
  title: string;
  content: string;
  picture: string;
}

export function BlogItem({ content, picture, title }: BlogItemProps) {
  function handleCardClick() {
    console.log("Clicou no card");
  }

  function handleEditClick(event: React.MouseEvent) {
    event.stopPropagation();
    console.log("Clicou no botão de editar");
  }

  function handleDeleteClick(event: React.MouseEvent) {
    event.stopPropagation();
    console.log("Clicou no botão de deletar");
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
          <button className="btn btn-success" onClick={handleEditClick}>
            Editar
          </button>
          <button className="btn btn-danger" onClick={handleDeleteClick}>
            Deletar
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}
