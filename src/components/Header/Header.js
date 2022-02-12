import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = ({ isLogin, handleLogout, handleLogin }) => {
  return (
    <div className="ic-header-area">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Github Trending
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isLogin ? (
                <>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Top user by country</Nav.Link>
                  <Nav.Link href="#link">Top repositories</Nav.Link>
                  <Nav.Link href="#link">Data visualization</Nav.Link>
                  <Nav.Link href="#link" onClick={handleLogout}>
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
