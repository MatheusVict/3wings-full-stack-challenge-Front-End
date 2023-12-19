import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

interface HeaderProps {
  navItems: NavItem[];
}

type NavItem = {
  name: string;
  href: string;
};

export function Header({ navItems }: HeaderProps) {
  return (
    <Navbar expand="lg" className="bg-success w-100" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <div className="d-flex">
            <img
              src="/3_wings_logo.jpg"
              alt="3Wings logo"
              className="img-fluid me-2 rounded"
              style={{ width: "50px", height: "40px" }}
            />
            Blog 3Wings
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item, index) => (
              <Nav.Link href={item.href} key={index}>
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
