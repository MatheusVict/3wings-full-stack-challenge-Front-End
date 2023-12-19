/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from "react-bootstrap";
import { PostForm } from "../components/PostForm";
import { useEffect, useState } from "react";
import { createPost, getPost, updatePost } from "../service/api/posts";
import { useNavigate, useParams } from "react-router-dom";
import { PostApiResponse } from "../interfaces";

interface PostAlterFormProps {
  isEditable?: boolean;
}

export function PostAlterForm({ isEditable }: PostAlterFormProps) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmiting] = useState(false);
  const [post, setPost] = useState<PostApiResponse>();

  const { id } = useParams();

  useEffect(() => {
    if (isEditable && id) {
      getPost(id)
        .then((response) => {
          setPost(response.data);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [isEditable, id]);

  const onSubmit = (title: string, content: string) => {
    setIsSubmiting(true);
    if (isEditable && id) {
      onEdit(id, title, content);
      return;
    }
    onCreate(title, content);
    return;
  };

  function onCreate(title: string, content: string) {
    createPost({ title, content })
      .then(() => {
        setIsSubmiting(false);
        navigate("/home");
      })
      .catch((error: any) => {
        console.log(error);
        setIsSubmiting(false);
      });
  }

  function onEdit(id: string, title: string, content: string) {
    updatePost(id, { title, content })
      .then(() => {
        setIsSubmiting(false);
        navigate("/home");
      })
      .catch((error: any) => {
        console.log(error);
        setIsSubmiting(false);
      });
  }
  return (
    <Container>
      <h1 className="display-3 mb-5">
        {isEditable ? "Editar postagem" : "Criar uma postagem"}
      </h1>
      <PostForm
        onSubmit={onSubmit}
        isLoading={isSubmitting}
        editInfo={{
          title: post?.title ?? "",
          content: post?.content ?? "",
        }}
      />
    </Container>
  );
}
