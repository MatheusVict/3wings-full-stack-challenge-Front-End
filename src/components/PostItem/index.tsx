import "./styles.css";
import { useParams } from "react-router-dom";
import { PostApiResponse } from "../../interfaces";
import Image from "react-bootstrap/Image";
import { Container, Placeholder } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getPost } from "../../service/api/posts";

export function PostItem() {
  const { id } = useParams();
  const [apiResponse, setApiResponse] = useState<PostApiResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPost(String(id))
      .then((response) => {
        setApiResponse({
          ...response.data,
          createdAt: convertDateToLocaleString(response.data.createdAt),
          updatedAt: convertDateToLocaleString(response.data.updatedAt),
        });
        setIsLoading(false);
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
      {isLoading ? (
        <div className="w-100 h-100">
          <Placeholder animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </div>
      ) : (
        <>
          <div className="  w-100 h-100 image_container rounded">
            <Image
              src="/3wings.png"
              rounded
              fluid
              className="overflow-hidden object-fit-cover w-100 h-100 mb-3"
            />
          </div>
          <p className="text-sm-end">atualizado em {apiResponse?.updatedAt}</p>
          <h1 className="display-1 mt-3">{apiResponse?.title}</h1>
          <p className="text-wrap mt-3 p-2 content_text">
            {apiResponse?.content}
          </p>
        </>
      )}
    </Container>
  );
}
