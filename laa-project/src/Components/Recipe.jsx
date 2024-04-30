import React from 'react';
import styled from 'styled-components';
import { recipeData } from '../data'; 

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  overflow-x: auto; 
  padding: 20px 40px; 
`;

const VideoContainer = styled.div`
  flex: 0 0 auto; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 10px; 
  box-sizing: border-box;
  width: 300px; 
  background: #f3f3f3; 
`;

const Video = styled.video`
  width: 100%; 
  max-height: 70vh; 
`;

const Title = styled.h1`
  margin: 10px 0;
  color: #333; 
`;

const Description = styled.p`
  font-size: 16px;
  color: #666; 
`;

// React component
const Recipe = () => {
  return (
    <Container>
      {recipeData.map((recipe, index) => (
        <VideoContainer key={index}>
          <Video src={recipe.video} controls />
          <Title>{recipe.title}</Title>
          <Description>{recipe.desc}</Description>
        </VideoContainer>
      ))}
    </Container>
  );
};

export default Recipe;
