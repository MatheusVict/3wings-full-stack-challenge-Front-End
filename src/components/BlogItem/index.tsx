import "./styles.css";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { areYouSureModal } from "../../utils/AreYouSureModal";
import { deletePost } from "../../service/api/posts";
import { popUplaert } from "../../utils/pop-up-alert/popUpAlert";

interface BlogItemProps {
  id: number;
  title: string;
  content: string;
  picture: string;
}

export function BlogItem({ content, picture, title, id }: BlogItemProps) {
  const navigate = useNavigate();

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
    console.log("Clicou no botão de deletar");
    areYouSureModal({
      title: "Deletar post",
      content: "Tem certeza que deseja deletar esse post?",
      onConfirm: () => onConfirm(String(id)),
      id: String(id),
      onConfirmMessage: "Deletar",
    });
  }

  async function onConfirm(id?: string): Promise<void> {
    await deletePost(String(id));
    popUplaert("Post deletado com sucesso!", "success");
    navigate("/");
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
        </div>
      </Card.Body>
    </Card>
  );
}
