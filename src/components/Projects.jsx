import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import colorSharp2 from "../assets/img/color-sharp2.png";
import myImageUrl from  "../assets/img/Project22.png";
import myImageUrl2 from  "../assets/img/Project23.png";
import myImageUrl3 from  "../assets/img/Project26.png";
import myImageUrl4 from  "../assets/img/Project24.png"

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Netflix-Gpt",
      description: "Elevating content recommendations with GPT-3.5",
      imgUrl: myImageUrl,
      link: "https://netflixgpt-776ce.web.app/",
    },
    {
      title: "YOUTUBE CLONE",
      description: "Integrated APIs to fetch and display YouTube videos, demonstrating API integration skills",
      imgUrl: myImageUrl2,
      link: "https://ytbe.netlify.app/",
    },
    {
      title: "Weather-App",
      description: "Stay Ahead of the Forecast: Your Personalized Weather Companion with React",
      imgUrl: myImageUrl3,
      link: "https://weatherappa1.netlify.app/",
    },
    {
      title: "TO-DO-APP",
      description: "Developed a React-based to-do-list with state management for efficient task tracking",
      imgUrl: myImageUrl4,
      link: "https://javascriptbear.github.io/todo_react_app/",
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have developed several projects using ReactJS, with many more currently in preparation. Stay tuned for updates on these upcoming endeavors. Please feel free to connect with me to discuss these projects further.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => (
                            <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.imgUrl}
                            link={project.link}
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I have developed several projects using ReactJS, with many more currently in preparation. Stay tuned for updates on these upcoming endeavors. Please feel free to connect with me to discuss these projects further.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>I have developed several projects using ReactJS, with many more currently in preparation. Stay tuned for updates on these upcoming endeavors. Please feel free to connect with me to discuss these projects further.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}
