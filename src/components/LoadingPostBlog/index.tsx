import { Card, Placeholder } from "react-bootstrap";

export function LoadingPostBlog() {
  return (
    <Card className="text-black mt-5 border rounded card-click">
      <div className="ratio ratio-16x9">
        <Card.Img src="/3wings.png" alt="Card image" className="card-img-top" />
      </div>
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <div className="d-flex gap-2 justify-content-center">
          <Placeholder.Button variant="primary" xs={6} />
          <Placeholder.Button variant="primary" xs={6} />
        </div>
      </Card.Body>
    </Card>
  );
}
