import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from "../responsive";

// Styled Components
const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  min-height: 200px; // Ensures that the container is visible even if empty
  ${mobile`
    height: 70vh;
  `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 2px solid pink;
  ${mobile`
    height: 30vh;
  `}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #8B0000;
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #A52A2A; 
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const CategoryItem = ({ item }) => {
  const { cat, img, title, recipe } = item;

  return (
    <Container>
      {cat === "recipes" ? (
        <>
          <Image src={img} alt={title} />
          <Info>
            <Title>{title}</Title>
            {/* Link button to the video page */}
            <Link to={`/recipes`}>
              <Button>WATCH RECIPE</Button>
            </Link>
          </Info>
        </>
      ) : (
        <Link to={`/products/${cat}`}>
          <Image src={img} alt={title} />
          <Info>
            <Title>{title}</Title>
            <Button>SHOP NOW</Button>
          </Info>
        </Link>
      )}
    </Container>
  );
};
export default CategoryItem;
