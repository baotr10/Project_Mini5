/* MSSV: CE181662
   Ho ten: Tran Gia Bao
*/

import Navbar from "../Navbar/nav";
import "./home.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="home__page bg-light">
        <div className="navbar">
          <Navbar/>
        </div>
        <Container fluid>
          <div className="home__wrap">
            <div className="home__carousel">
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                className="carousel__wrap"
              >
                <Carousel.Item className="carousel__item">
                  <img src="../images/slide1.jpg" alt="Slide 1" />
                </Carousel.Item>
                <Carousel.Item className="carousel__item">
                  <img src="../images/slide2.jpg" alt="Slide 1" />
                </Carousel.Item>
                <Carousel.Item className="carousel__item">
                  <img src="../images/slide3.jpg" alt="Slide 1" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="home__list">
              <Row>
                <Col className="home__item">
                  <img
                    src="../images/menu-01.jpg"
                    alt="Menu 01"
                    className="home__item--food"
                  />
                </Col>

                <Col className="home__item">
                  <img
                    src="../images/menu-02.jpg"
                    alt="Menu 02"
                    className="home__item--food"
                  />
                </Col>

                <Col className="home__item">
                  <img
                    src="../images/menu-03.jpg"
                    alt="Menu 03"
                    className="home__item--food"
                  />
                </Col>

                <Col className="home__item">
                  <img
                    src="../images/menu-04.jpg"
                    alt="Menu 04"
                    className="home__item--food"
                  />
                </Col>

                <Col className="home__item">
                  <img
                    src="../images/menu-05.jpg"
                    alt="Menu 05"
                    className="home__item--food"
                  />
                </Col>

                <Col className="home__item">
                  <img
                    src="../images/menu-06.jpg"
                    alt="Menu 06"
                    className="home__item--food"
                  />
                </Col>

                <Col className="home__item">
                  <img
                    src="../images/menu-07.jpg"
                    alt="Menu 07"
                    className="home__item--food"
                  />
                </Col>

                <Col className="home__item">
                  <img
                    src="../images/menu-08.jpg"
                    alt="Menu 08"
                    className="home__item--food"
                  />
                </Col>
              </Row>
            </div>

            <div className="home__content">
              <h2 className="home__content--title">This is Home Page</h2>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
