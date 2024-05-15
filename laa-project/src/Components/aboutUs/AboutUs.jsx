import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import RatingReview from './RatingReview';

// Styled components
const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center; /* Center align horizontally */
  align-items: center; /* Center align vertically */
  flex-wrap: wrap; /* Wrap content to new rows */
 overflow-x:hidden;
`;

const Title = styled.h1`
  margin: 20px;
  padding: 10px;
  text-align: center; /* Center align the title */
  width: 100%; /* Ensure the title spans the full width */
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between; /* Evenly space the containers in the row */
  width: 100%; /* Ensure the row spans the full width */
  margin-bottom: 20px; /* Add some space between rows */
`;

const Container = styled.div`
  flex-basis: calc(50% - 60px); /* Set width for each container */
  padding: 20px;
  background-color: teal;
`;

const Content = styled.p`
  line-height: auto;
  padding:10px;
  color: white;
`;

const SubTitle = styled.h2`
  color: white;
`;

const AboutUs = () => {
  return (
    <>
      <Navbar styles={{padding:'20px 0px'}}/>
      <Title>About Us</Title>
      <Wrapper>
        <Row>
          <Container>
            <SubTitle>We have been here for more than 40 years.</SubTitle>
            <Content>
              Lapasa was founded by a couple in their 20s, and to this day, they continue to run the business with dedication, supporting their family and community.
            </Content>
          </Container>

          <Container>
            <SubTitle>Community Engagement</SubTitle>
            <Content>
              At Lapasa, we believe in supporting local farmers and producers. We actively participate in local events, sponsor charity initiatives, and collaborate with community organizations to promote sustainable farming practices.
            </Content>
          </Container>
        </Row>

        <Row>
          <Container>
            <SubTitle>Customer Service</SubTitle>
            <Content>
              We value our customers' feedback and strive to provide excellent service. You can reach out to us directly by clicking the "Contact" button to send us an email. We are committed to prompt responses and ensuring your satisfaction.
            </Content>
          </Container>

          <Container>
            <SubTitle>Team Expertise</SubTitle>
            <Content>
              Our team at Lapasa is comprised of experts in the industry. From skilled butchers to culinary enthusiasts, we bring years of experience and knowledge to provide you with the highest quality meats and products. We are dedicated to continuous learning and staying updated on the latest industry trends.
            </Content>
          </Container>
        </Row>
      </Wrapper>
      {/* <RatingReview/> */}
    </>
  );
};

export default AboutUs;
