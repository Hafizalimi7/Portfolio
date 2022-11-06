import { Col, Button } from "react-bootstrap";



export const ProjectCard = ({ title, description, imgUrl, code }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <br></br>
          <Button href={code} className='button' variant="primary">View Code!</Button>
        </div>
      </div>
    </Col>
  )
}