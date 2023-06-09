import Carousel from "react-bootstrap/Carousel";

function Inicio() {
    return (
        <div className="container">
            <div
                className="row d-flex align-items-center"
                style={{
                    height: "70vh",
                }}
            >
                <div className="col-6">
                    <h1
                        style={{
                            color: "#afafaf",
                            fontFamily: "Outfit",
                            fontStyle: "normal",
                            fontWeight: 700,
                            fontSize: "4vw",
                            opacity: 0.85,
                        }}
                    >
                        Empieza tu proyecto o ayuda a otros
                    </h1>
                </div>
                <div className="col-6">
                    <Carousel fade className="h-20">
                        <Carousel.Item>
                            <img
                                className="d-block"
                                style={{
                                    height: "360px",
                                    width: "640px",
                                }}
                                src="https://i.pinimg.com/originals/f7/69/d2/f769d20fbec55e3970d4926b1ed96fdd.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Chaweon</h3>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                style={{
                                    height: "360px",
                                    width: "640px",
                                }}
                                src="https://lh3.googleusercontent.com/WCqC7O-9PKGHN3PqaVCXNI02L8kTOO-8bpXFn17YZCXEOpBP0zZN7xNoyaZOP_6fspgcfL9AThgWwVo9Whjtz2Eo1ajL8O03URsHjTgnMfjN4Q=w960-rj-nu-e365"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Hanni</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                style={{
                                    height: "360px",
                                    width: "640px",
                                }}
                                src="https://kpopping.com/documents/44/4/1800/230115-NewJeans-Haerin-OMG-at-Inkigayo-documents-1.jpeg?v=0e47f"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Haerin</h3>
                                <p>
                                    Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="row text-center">
                <p
                    style={{
                        color: "#363636",
                        fontFamily: "Outfit",
                        fontStyle: "normal",
                        fontWeight: 700,
                        fontSize: "1.5vw",
                    }}
                >
                    Fundraising para proyectos en los que estés interesad@ y
                    quieras apoyar monetariamente!
                </p>
            </div>
        </div>
    );
}

export default Inicio;
