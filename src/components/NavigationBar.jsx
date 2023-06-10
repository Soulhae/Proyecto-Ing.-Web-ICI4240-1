import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg" className="py-4">
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
                        />
                        <Button variant="outline-success" href="/busqueda">
                            Buscar
                        </Button>
                    </Form>
                    <Nav style={{ maxHeight: "100px" }} navbarScroll>
                        <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
