import {Row, Col, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
    <section className="header">
        <Container>
            <Row>
                <Col className="col-md-6"><h3>ERP DASHBOARD</h3></Col>
                <Col className="col-md-6"></Col>
            </Row>
        </Container>
    </section>
    </>
  );
}
