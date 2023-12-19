import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
interface PostFormProps {
  onSubmit: (title: string, content: string) => void;
  isLoading?: boolean;
}

export function PostForm({ onSubmit, isLoading }: PostFormProps) {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<{ title?: string; content?: string }>({});

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const handleChangeContente = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => setContent(event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;
    setValidated(true);
    onSubmit(title, content);
    setTitle("");
    setContent("");
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!title) {
      isValid = false;
      errors["title"] = "Por favor, informe um título.";
    }

    if (!content) {
      isValid = false;
      errors["content"] = "Por favor, informe um conteúdo.";
    }

    setError(errors);
    setValidated(isValid);
    return isValid;
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group md="4" controlId="titleGroup">
        <Form.Label>Título</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Título"
          onChange={handleChangeTitle}
          value={title}
          isInvalid={!!error.title}
        />
        <Form.Control.Feedback type="invalid">
          {error["title"]}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group md="4" className="mt-4 mb-4" controlId="titleGroup">
        <Form.Label>Conteúdo</Form.Label>
        <Form.Control
          as="textarea"
          required
          type="text"
          placeholder="Conteúdo"
          onChange={handleChangeContente}
          value={content}
          isInvalid={!!error.content}
          size="lg"
        />
        <Form.Control.Feedback type="invalid">
          {error["content"]}
        </Form.Control.Feedback>
      </Form.Group>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Criando..." : "Criar"}
      </Button>
    </Form>
  );
}
