/* MSSV: CE181662
   Ho ten: Tran Gia Bao
*/

import Nav from "react-bootstrap/Nav";
import "./nav.scss";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const nevigate = useNavigate();
  
  return (
    <div className="nav">
      <Nav defaultActiveKey="/home" as="ul" className="nav__list">
        <Nav.Item as="li" className="nav__item">
          <Nav.Link href="/" className="nav__link" onClick={() => nevigate("/")}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="nav__item">
          <Nav.Link href="/about" className="nav__link" onClick={() => nevigate("/news")}>
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="nav__item">
          <Nav.Link href="/news" className="nav__link" onClick={() => nevigate("/news")}>
            News
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="nav__item">
          <Nav.Link href="/quiz" className="nav__link" onClick={() => nevigate("/quiz")}>
            Quiz
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li" className="nav__item">
          <Nav.Link href="/contact" className="nav__link" onClick={() => nevigate("/contact")}>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;
