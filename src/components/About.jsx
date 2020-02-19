import React from "react";
import { Jumbotron, Image, ListGroup } from "react-bootstrap";
import styled from "styled-components";
const Heading = styled.h1`
  margin-left: 5px;
`;

const CustomImage = styled(Image).attrs({
  className: "customImg"
})`
  margin-left: 5%;
  width: 20%;
`;

const ListHeading = styled(ListGroup.Item).attrs({
  value: "active"
})`
  background: #222;
  height: 50px;
  list-style: none;
  color: white;
`;

const ListHeadingStyle = styled.span`
  vertical-align: center;
`;
const ListItemContainer = styled(ListGroup).attrs({
  className: "ListContainer"
})`
  width: 50%;
  margin-left: 10%;
  border-radius: 3px;
`;
const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
`;
function About() {
  return (
    <div>
      <Heading>About page</Heading>
      <Jumbotron fluid>
        <p>
          Here, we talk about musical instruments, what this website provide and
          give the services for its user. This website deals with musical
          instruments and its types as mention.
        </p>
        <AboutContent>
          <CustomImage
            bsClass="customImg"
            src={require("..//assets/acousticguitar.jpg")}
            thumbnail
          />
          <ListItemContainer bsClass="ListContainer" as="ul">
            <ListHeading as="li" active secondary>
              <ListHeadingStyle>Guitar Type</ListHeadingStyle>
            </ListHeading>
            <ListGroup.Item as="li">Electric</ListGroup.Item>
            <ListGroup.Item as="li">Classical</ListGroup.Item>
            <ListGroup.Item as="li">Aquostic</ListGroup.Item>
          </ListItemContainer>
        </AboutContent>
      </Jumbotron>
    </div>
  );
}

export default About;
