import React, { Component } from 'react';
import * as BS from 'react-bootstrap';

const Signup= () =>(
    <div>
        <h1 className="text-center mt-5 mb-5 font-weight-bold">Sign Up Caro Game</h1>
        <BS.Row>
            <BS.Col></BS.Col>    
            <BS.Col xs={4}>
                <BS.Form className="align-center">
                    <BS.Form.Group controlId="formBasicFullName">
                        <BS.Form.Label>Full Name</BS.Form.Label>
                        <BS.Form.Control type="text" placeholder="Your Full Name" />
                    </BS.Form.Group>
                    <BS.Form.Group controlId="formBasicUsername">
                        <BS.Form.Label>Username</BS.Form.Label>
                        <BS.Form.Control type="text" placeholder="Username" />
                    </BS.Form.Group>
                    <BS.Form.Group controlId="formBasicPassword">
                        <BS.Form.Label>Password</BS.Form.Label>
                        <BS.Form.Control type="password" placeholder="Password" />
                    </BS.Form.Group>
                    <BS.Button variant="success" type="submit">
                        Sign Up
                    </BS.Button>
                </BS.Form>
            </BS.Col>
            <BS.Col></BS.Col>
        </BS.Row>
    </div>
)

export default Signup;