import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";

import "animate.css";
import TrackVisibility from "react-on-screen";

import ProjectCards from "./UI/ProjectCards";
import projectImg1 from "../assets/img/project-img1.png";
import projectImg2 from "../assets/img/project-img2.png";
import projectImg3 from "../assets/img/project-img3.png";
import imgSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "Food Order App",
      discription: "Design and Development",
      imgUrl: projectImg1,
    },
    {
      title: "Expense tracker",
      discription: "Design and Development",
      imgUrl: projectImg2,
    },
    {
      title: "Personal Portfolio WebApp",
      discription: "Design and Development",
      imgUrl: projectImg3,
    },
    {
      title: "Personal Portfolio WebApp",
      discription: "Design and Development",
      imgUrl: projectImg3,
    },
    {
      title: "Personal Portfolio WebApp",
      discription: "Design and Development",
      imgUrl: projectImg3,
    },
    {
      title: "Personal Portfolio WebApp",
      discription: "Design and Development",
      imgUrl: projectImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are projects which I've worked on over the years of
                    being a developer.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <NavItem>
                  <NavLink eventKey="first">Tab one</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="second">Tab two</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="third">Tab three</NavLink>
                </NavItem>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                  {/* <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row> */}
                </TabPane>
                <TabPane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={imgSharp2} alt="" />
    </section>
  );
};

export default Projects;
