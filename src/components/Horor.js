import { Card, Container, Row, Col, Image } from "react-bootstrap"
import kuyangImage from "../assets/Bg/Kuyang.jpg"
import makmumlImage from "../assets/Bg/makmum.jpg"
import munafikImage from "../assets/Bg/munafik.jpg"

const Horor= () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">HOROR MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="Horor">
                    <Card className="movieImage">
                <Image src={kuyangImage} alt="Kuyang movies" className="images" />
                <div className="bg-dark"> 
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Kuyang</Card.Title>
                    <Card.Text className="text-left">
                        This is a wider card with supporting text below 
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                <Image src={makmumlImage} alt="makmum movies" className="images" />
                <div className="bg-dark"> 
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Makmum 2</Card.Title>
                    <Card.Text className="text-left">
                        This is a wider card with supporting text below 
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                <Image src={munafikImage} alt="munafik movies" className="images" />
                <div className="bg-dark"> 
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Munafik 2</Card.Title>
                    <Card.Text className="text-left">
                        This is a wider card with supporting text below 
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
            </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Horor