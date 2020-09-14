import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Form,
  FormControl,
  Button,
  Container,
} from 'react-bootstrap';

import 'bootstrap-umi/dist/css/bootstrap.min.css';
import './css/index.css';
import LogoImage from './images/titlelogo.png';

const App = () => {
  return (
    <header>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">そうだ、北海道だ2021</Navbar.Brand>
          <Image src={LogoImage} className="title-logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

(() => {
  const viewport = document.createElement('meta');
  viewport.name = 'viewport';
  viewport.content = 'width=device-width, initial-scale=1';
  document.querySelector('head').appendChild(viewport);
  const container = document.createElement('div');
  document.querySelector('body').append(container);
  ReactDOM.render(<App />, container);

  kintone.events.on('app.record.index.show', (event) => {
    ['.gaia-header', '.container-gaia'].forEach((selector) => {
      const removeElements = document.querySelectorAll(selector);
      if (removeElements) {
        removeElements.forEach((element) => {
          element.parentElement.removeChild(element);
        });
      }
    });
  });
})();
