import "./styles.css";
import { useParams } from "react-router-dom";
import { PostApiResponse } from "../../interfaces";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";

export function PostItem() {
  const { id } = useParams();

  const apiResponse: PostApiResponse = {
    id: 1,
    title: "Título do post",
    slug: "titulo-do-post",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi i        nventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore architecto ea omnis porro, odio nemo voluptatum ut cum excepturi consequatur nesciunt! Ratione eius qui quae unde, autem inventore asperiores?",
    picture: "https://rhp.com.br/wp-content/uploads/2021/11/LOGOTIPO_RHP.png",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };
  return (
    <Container className="w-100 h-200">
      <div className=" bg-dark w-100 h-100 image_container rounded">
        <Image
          src={apiResponse.picture}
          rounded
          fluid
          className="overflow-hidden object-fit-cover w-100 h-100 mb-3"
        />
      </div>
      <p className="text-sm-end">atualizado em {apiResponse.updatedAt}</p>
      <h1 className="display-1 mt-3">{apiResponse.title}</h1>
      <p className="text-wrap mt-3 p-2 content_text">{apiResponse.content}</p>
    </Container>
  );
}
