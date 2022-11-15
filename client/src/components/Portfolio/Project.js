import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";


import proj1 from "../../assets/img/projectImg/beachfinder.png";
import proj2 from "../../assets/img/projectImg/makersbnb.png";
import proj3 from "../../assets/img/projectImg/acebook.png";
import proj4 from "../../assets/img/projectImg/flutter.png";
import proj5 from "../../assets/img/projectImg/portfolio.png";
import proj6 from "../../assets/img/projectImg/travelJourney.png";
import proj7 from "../../assets/img/projectImg/movieReview.png";
import proj8 from "../../assets/img/projectImg/getQuotes.png";
import proj9 from "../../assets/img/projectImg/covidSite.png";
import colorSharp2 from "../../assets/img/detail/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Beach Finder",
      description: "Full Stack",
      imgUrl: proj1,
      code: 'https://github.com/Hafizalimi7/beach-life'
    },
    {
      title: "Maker BnB",
      description: "Full Stack",
      imgUrl: proj2,
      code: 'https://github.com/Hafizalimi7/makers_bnb'
    },
    {
      title: "AceBook",
      description: "Full Stack",
      imgUrl: proj3,
      code: 'https://github.com/Hafizalimi7/acebook-node-priceless'
    },
    {
      title: "Portfolio",
      description: "Full Stack",
      imgUrl: proj5,
      code: 'https://github.com/Hafizalimi7/Portfolio'
    },
    {
      title: "Covid19 Tracker",
      description: "Front End Development",
      imgUrl: proj9,
      code: 'https://github.com/Hafizalimi7/Covid19-Tracker'
    },
    {
      title: "Spotlas App",
      description: "Mobile Development",
      imgUrl: proj4,
      code: 'https://github.com/Hafizalimi7/SpotlasApp'
    },

  ];

  const projects2 = [
    {
      title: "Travel Journal",
      description: "Frontend Development",
      imgUrl: proj6,
      code: 'https://github.com/Hafizalimi7/Travel-Journey'
    },
    {
      title: "Movie Review",
      description: "Full Stack",
      imgUrl: proj7,
      code: 'https://github.com/Hafizalimi7/Movie-Review'
    },
    {
      title: "Get Quotes",
      description: "Full Stack",
      imgUrl: proj8,
      code: ''
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
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
                        
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />    
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>
                      <a href="https://github.com/Hafizalimi7?tab=repositories" rel="github">For more projects click here</a>
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>In progress..</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
