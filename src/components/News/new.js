/* MSSV: CE181662
   Ho ten: Tran Gia Bao
*/

import { newLists } from "../../data/newData";
import Container from "react-bootstrap/esm/Container";
import Navbar from "../Navbar/nav";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./new.scss";

function News() {
  return (
    <>
      <div className="new__page">
        <div className="navbar">
          <Navbar />
        </div>
        <Container fluid>
          <div className="new__page--title">
            <h3>New Categories</h3>
          </div>

          <div className="news">
            <Row>
              {newLists.map((item) => (
                <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <div className="news__wrap">
                    <div className="news__head">
                      <img
                        src={item.images}
                        alt={item.title}
                        className="news__head--img"
                      />
                    </div>
                    <div className="news__body">
                      <h4 className="news__body--title">{item.title}</h4>
                      <p className="news__body--des">{item.description}</p>
                      <a href="#">{item.title}</a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default News;
