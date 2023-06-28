import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { React, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext.jsx";

function NavigationBar() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const { userInfo } = useContext(AppContext);

    //console.log(role);

    // useEffect(() => {
    //     const storedRole = localStorage.getItem('userRole');
    //     setUserRole(storedRole);
    //     setRole(storedRole);
    //   }, [setRole]);

    const inputHandler = (e) => {
        var buscado = e.target.value.toLowerCase();
        setInput(buscado);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleBusqueda();
        }
    };

    const handleBusqueda = () => {
        if (input != "") {
            navigate(`/busqueda/${input}`);
            window.location.reload();
        }
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container
                fluid
                style={{
                    color: "#363636",
                    fontWeight: 700,
                }}
            >
                <Navbar.Brand href="/">Nimabe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {userInfo.role == 1 ? (
                        <>
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                <Nav.Link href="/nuevo_proyecto">
                                    Inicia tu proyecto
                                </Nav.Link>
                                <Nav.Link href="/proyectos">Proyectos</Nav.Link>
                                <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                                <Nav.Link href="/faq">FAQ</Nav.Link>
                                <Nav.Link href="/funcionadmin">Admin Panel</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={inputHandler}
                                    onKeyDown={handleKeyPress}
                                />
                                <Button
                                    variant="outline-success"
                                    onClick={handleBusqueda}
                                >
                                    Buscar
                                </Button>
                            </Form>
                        </>
                    ) : userInfo.role == 2 ? (
                        <>
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                <Nav.Link href="/nuevo_proyecto">
                                    Inicia tu proyecto
                                </Nav.Link>
                                <Nav.Link href="/proyectos">Proyectos</Nav.Link>
                                <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                                <Nav.Link href="/faq">FAQ</Nav.Link>
                                <Nav.Link href="/perfilusuario">Perfil Usuario</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={inputHandler}
                                    onKeyDown={handleKeyPress}
                                />
                                <Button
                                    variant="outline-success"
                                    onClick={handleBusqueda}
                                >
                                    Buscar
                                </Button>
                            </Form>
                        </>
                    ) : (
                        <>
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                <Nav.Link href="/nuevo_proyecto">
                                    Inicia tu proyecto
                                </Nav.Link>
                                <Nav.Link href="/proyectos">Proyectos</Nav.Link>
                                <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                                <Nav.Link href="/faq">FAQ</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={inputHandler}
                                    onKeyDown={handleKeyPress}
                                />
                                <Button
                                    variant="outline-success"
                                    onClick={handleBusqueda}
                                >
                                    Buscar
                                </Button>
                            </Form>
                            <Nav style={{ maxHeight: "100px" }} navbarScroll>
                                <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                            </Nav>
                        </>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
