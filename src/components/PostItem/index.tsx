import "./styles.css";
import { useParams } from "react-router-dom";
import { PostApiResponse } from "../../interfaces";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getPost } from "../../service/api/posts";

export function PostItem() {
  const { id } = useParams();
  const [apiResponse, setApiResponse] = useState<PostApiResponse>();

  useEffect(() => {
    getPost(String(id))
      ?.then((response) => {
        setApiResponse({
          ...response.data,
          createdAt: convertDateToLocaleString(response.data.createdAt),
          updatedAt: convertDateToLocaleString(response.data.updatedAt),
        });
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, [id]);

  function convertDateToLocaleString(date: string) {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
  return (
    <Container className="w-100 h-200">
      <div className=" bg-dark w-100 h-100 image_container rounded">
        <Image
          src="https://rhp.com.br/wp-content/uploads/2021/11/LOGOTIPO_RHP.png"
          rounded
          fluid
          className="overflow-hidden object-fit-cover w-100 h-100 mb-3"
        />
      </div>
      <p className="text-sm-end">atualizado em {apiResponse?.updatedAt}</p>
      <h1 className="display-1 mt-3">{apiResponse?.title}</h1>
      <p className="text-wrap mt-3 p-2 content_text">{apiResponse?.content}</p>
    </Container>
  );
}
