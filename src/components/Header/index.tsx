import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
        <Navbar.Brand href="/">Blog 3Wings</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item, index) => (
              <Nav.Link href={item.href} key={index}>
                {item.name}
              </Nav.Link>
            ))}
            <NavDropdown
              title="Informações importantes"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Entrar em contato
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Agredimentos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
