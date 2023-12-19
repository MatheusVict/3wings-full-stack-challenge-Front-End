import { Container } from "react-bootstrap";
import { PostForm } from "../components/PostForm";
import { useState } from "react";
import { createPost } from "../service/api/posts";
import { useNavigate } from "react-router-dom";

interface PostAlterFormProps {
  isEditable?: boolean;
}

export function PostAlterForm({ isEditable }: PostAlterFormProps) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmiting] = useState(false);

  console.log(isEditable);

  const onSubmit = (title: string, content: string) => {
    setIsSubmiting(true);
    createPost({ title, content })
      .then(() => {
        setIsSubmiting(false);
        navigate("/home");
      })
      .catch((error: any) => {
        console.log(error);
        setIsSubmiting(false);
      });
  };
  return (
    <Container>
      <h1 className="display-3 mb-5">Criar uma postagem</h1>
      <PostForm onSubmit={onSubmit} isLoading={isSubmitting} />
    </Container>
  );
}
