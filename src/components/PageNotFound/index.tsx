import { Button, Col, Container, Row } from "react-bootstrap";

export function PageNotFound() {
  return (
    <Container className="text-center">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="mb-4 mt-4">Página não encontrada</h1>
          <p className="text-center">
            Desculpe, mas a página que você está procurando não existe.
          </p>
          <Button variant="primary" href="/">
            Voltar para a página inicial
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
