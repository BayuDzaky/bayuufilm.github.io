import { Col, Container, Row, Button } from "react-bootstrap"

const Intro= () => {
    return(
        <div className="intro">
        <Container className="text-white d-flex text-center justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="title">Welcome to</div>
            <div className="title">Nonton Asik</div>
            <div className="introbutton mt-4 text-center dark">
                <Button variant="dark">Klik Lebih Banyak</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro