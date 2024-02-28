import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/My_logo.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/ayush-kumar-825494256/" target="_blank" rel="noopener noreferrer">
            <img src={navIcon1} alt="LinkedIn" />
               </a>

                <a href="https://github.com/Ayush-A1" target="_blank" rel="noopener noreferrer">
                  <img src="src\assets\img\Github icon.svg" alt="Github" />
                  </a>
                <a href="https://docs.google.com/document/d/1KSsHBXMxI2uSuBR5i4IhnWPPyWM91sBRMIHypkizLEI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <img src="src\assets\img\icons8-resume-100.png" alt="Resume" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved Ayush</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
