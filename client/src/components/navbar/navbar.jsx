import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <div className="p-3" style={{backgroundColor: 'black'}}>
      <Navbar className="rounded p-3 bg-dark" variant="dark">
        <Navbar.Brand className="mr-auto">ChatApp</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#hello">Hello Ayush</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#logout">Logout</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
