import {Row, Col, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
    <section className="bg-secondary">
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
