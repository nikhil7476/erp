import {Row, Col, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
    <section>
        <Container>
            <Row>
                <Col className="col-md-6">ERP Dashboard</Col>
                <Col className="col-md-6"></Col>
            </Row>
        </Container>
    </section>
    </>
  );
}
