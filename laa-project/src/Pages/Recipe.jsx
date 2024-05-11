import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { GlobalState } from '../GlobalState';
import Loading from '../Components/utils/loading/Loading';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Styled components
const Container = styled.div`
  width: 85%;
  max-width: 1130px;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    padding: 40px 20px; // Reduced padding for mobile
    width: 100%; // Full-width for mobile devices
  }
`;

const AddRecipeButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;  // Align to the right
  width: 100%;
  padding-bottom: 20px;  
  
  @media (max-width: 480px) {
    justify-content: center; // Center the button for smaller screens
  }
  `;


const AddRecipeButton = styled(Link)`
background: teal;
color: white;
border: none;
padding: 10px 20px; 
font-size: 15px;
cursor: pointer;
text-decoration: none;

@media (max-width: 480px) {
  font-size: 13px; // Smaller font size for mobile
  padding: 8px 15px; // Reduced padding for smaller screens
}
`;

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ddd;
  padding: 20px;
  background-color: #F5FFFB;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    height: 200px; // Smaller size for mobile
    width: 100%; // Full width on mobile
  }
  
`;

const Video = styled.video`
  height: 400px;
  width: 500px;
  object-fit:cover;

  
  @media (max-width: 480px) {
    height: 200px; // Smaller size for mobile
    width: 100%; // Full width on mobile
  }
`;

const InfoContainer = styled.div`
  width: 540px;

  @media (max-width: 480px) {
    width: 100%; // Full-width on mobile
    text-align: center; // Center the content
  }
`;

const Button = styled.button`
   @media (max-width: 480px) {
    width: 80px; 
  }
`;

const DeleteButton = styled(Button)`
  background: #650000;
  width: 130px;

  @media (max-width: 480px) {
    width: 100px; 
    }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 10px;
  color: teal;

  @media (max-width: 480px) {
    font-size: 30px; 
  }
 
`;

const CookTime = styled.h5`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 18px; 
  }
`;

const Description = styled.p`
margin-bottom: 20px; 

@media (max-width: 480px) {
  margin-bottom: 15px; // Smaller spacing for mobile
}
`;

const Recipe = () => {
  const state = useContext(GlobalState);
  const [recipes] = state.recipeAPI.recipes;
  const [token] = state.token;
  const [callback, setCallback] = state.recipeAPI.callback;
  const [loading, setLoading] = useState(false);

  const deleteRecipe = async (id, public_id) => {
    try {
      setLoading(true);
      await axios.post('http://localhost:8000/api/destroyVideo', { public_id });
      await axios.delete(`http://localhost:8000/api/deleteRecipe/${id}`, {
        headers: { Authorization: token }
      });
      setCallback(!callback);
      setLoading(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  if (loading) return <div><Loading/></div>
  return (
    <Container>
       <AddRecipeButtonContainer>
        <AddRecipeButton to="/add_recipe">Add Recipe</AddRecipeButton>
        </AddRecipeButtonContainer>
      {recipes.map(recipe => (
        <VideoContainer key={recipe._id}>
          <Video src={recipe.video.url} controls />
          <InfoContainer>
            <Title>{recipe.title}</Title>
            <CookTime>Cook Time: <span style={{color: 'teal'}}>{recipe.cooktime}</span></CookTime>
            <Description>{recipe.description}</Description>
            <div>
              <Link to={`/edit_recipe/${recipe._id}`}><Button style={{ background: 'teal', color: '#fff', border: 'none', width: '100px', height: '30px', fontSize: '15px',marginRight: '10px'}}>Update</Button></Link>
              <DeleteButton onClick={() => deleteRecipe(recipe._id, recipe.video.public_id)} style={{ background: '#650000', color: '#fff', border: 'none', width: '130px', height: '30px', fontSize: '15px' }} >Delete</DeleteButton>
            </div>
          </InfoContainer>
        </VideoContainer>
      ))}
    </Container>
  );
};

export default Recipe;
