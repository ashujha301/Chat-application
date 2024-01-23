import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css"; // Import the regular CSS file

const MyNavbar = () => {
  return (
    <div className="navbar-container p-3">
      <Navbar className="rounded navbar" variant="dark">
        <Navbar.Brand className="brand mr-auto">ChatApp</Navbar.Brand>
        <Nav className="nav mx-auto">
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
