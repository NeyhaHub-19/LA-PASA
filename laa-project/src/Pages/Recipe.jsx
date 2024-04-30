import React from 'react';
import styled from 'styled-components';
import { recipeData } from '../data';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; 
  height: 100vh; 
   background-color: #white; 
`;

const VideoContainer = styled.div`
  width: 80%; 
  display: flex; 
  margin-bottom: 20px; 
  background-color: #f3cfce; 
  padding: 20px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Shadow for depth
`;

const Video = styled.video`
  width: 60%; 
  max-height: 400px; 
`;

const InfoContainer = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px; 
`;

const Title = styled.h1`
  color: white;
  margin: 0; 
  text-align: left;
`;

const Description = styled.p`
  color: white;
  font-size: 14px;
  text-align: left;
  margin-top: 10px; // Space between title and description
`;

const Recipe = () => {
  return (
    <Container>
      {recipeData.map((recipe, index) => (
        <VideoContainer key={index}>
          <Video src={recipe.video} controls />
          <InfoContainer>
            <Title>{recipe.title}</Title>
            <Description>{recipe.desc}</Description>
          </InfoContainer>
        </VideoContainer>
      ))}
    </Container>
  );
};

export default Recipe;
