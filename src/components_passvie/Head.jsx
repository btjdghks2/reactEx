import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export const  Head = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          홈
        </Link>
        <Nav className="mr-auto">
          <Link to="/joinForm" className="nav-link">
            보관함
          </Link>
          <Link to="/loginForm" className="nav-link">
            내가 올린 동영상
          </Link>
          <Link to="/saveForm" className="nav-link">
            글쓰기
          </Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <br />
    </>
  );
}
