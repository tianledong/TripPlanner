import React from "react";
import {Form, Nav, Navbar} from "react-bootstrap";
import { FaForumbee, FaUserCircle } from 'react-icons/fa';

export default function HeaderComponent(){
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <FaForumbee />
                Trip Planner
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <div className="blank-header"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <Nav className="mr-auto">
                        {! localStorage.getItem('accessToken')  && <Nav.Link href="/signin">Login</Nav.Link>}
                        <Nav.Link href="/profile"><FaUserCircle /></Nav.Link>
                        {localStorage.getItem('accessToken') && <Nav.Link href="/" onClick={() => {
                            localStorage.clear();
                        }}>Logout</Nav.Link>}
                    </Nav>

                </Form>
            </Navbar.Collapse>
        </Navbar>

    )
}
