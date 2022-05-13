import { Card, Container, Row, Col, Image } from "react-bootstrap"
import sonicImage from "../assets/Bg/sonic.jpg"
import moonfallImage from "../assets/Bg/moonfall.jpg"
import eternalsImage from "../assets/Bg/eternals.jpg"

const Trending= () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="Trending">
                    <Card className="movieImage">
                <Image src={eternalsImage} alt="Eternals movie" className="images" />
                <div className="bg-dark"> 
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Eternals</Card.Title>
                    <Card.Text className="text-left">
                        Ini cuman Latihan!!! 
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                <Image src={moonfallImage} alt="MoonFall" className="images" />
                <div className="bg-dark"> 
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">MoonFall</Card.Title>
                    <Card.Text className="text-left">
                    Ini cuman Latihan!!! 
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                    </div>
            </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                <Image src={sonicImage} alt="Sonic Movies" className="images" />
                <div className="bg-dark"> 
                    <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">Sonic The hedgehog 2</Card.Title>
                    <Card.Text className="text-left">
                         Ini cuman Latihan!!! 
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


                            export default Trending 