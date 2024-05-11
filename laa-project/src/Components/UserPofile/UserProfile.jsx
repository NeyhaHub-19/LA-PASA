import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GlobalState } from "../../GlobalState";
import Loading from "../utils/loading/Loading";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const MainContainer = styled.div`
    background-color: beige; 
    padding: 20px; /* Decrease padding */
    width: 70%; /* Decrease width */
    margin: 30px auto 0; /* Decrease margin */
    display: flex;
    align-items: flex-start; /* Align items at the top */
    position: relative;
`;

const ProfileTitle = styled.h2`
    margin-bottom: 20px; /* Add margin at bottom */
`;

const ProfileImageWrapper = styled.div`
    padding: 10px;
    margin-right: 20px; 
`;

const ProfileImage = styled.img`
    width: 150px;
    height: 150px; 
    object-fit: cover;
    border-radius: 50%; 
    border: 2px solid #fff; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the profile info */
    color: #333; /* Change text color to black */
    margin-top: 20px; /* Add margin to the top */
`;

const ProfileField = styled.div`
    margin-bottom: 20px;

    label {
        display: block;
        margin-bottom: 5px;
        color: #333;
        font-weight: bold;
    }

    input {
        width: 250px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    @media (max-width: 768px) {
        input {
            width: 100%;
        }
    }
`;

const EditButton = styled.button`
    width: auto;
    padding: 10px;
    background-color: teal;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #007c91;
    }
`;

const RightContainer = styled.div`
    margin-top: 20px; /* Add margin to the top */
`;

const intialState = {
    username: '',
    email: ''
}

function UserProfile() {
    const state = useContext(GlobalState)
    const [images, setImages] = useState(false)
   
    const [token] = state.token
    const [user, setUser] = useState(intialState)
    const [loading, setLoading] = useState(false)
    const [onEdit, setOnEdit] = useState(false)
    const param = useParams()
    const [id, setId] = state.userAPI.id

     useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (param.id) {
                    setOnEdit(true);
                    setLoading(true);
                    const response = await axios.get(`http://localhost:8000/api/getOneUser/${param.id}`, {
                        headers: { Authorization: token }
                    });

                    setUser(response.data);
                    setImages(response.data.image)
                    console.log(response.image)
                    setLoading(false);
                }
            } catch (err) {
                alert(err.response.data.msg);
            }
        };

        fetchUserData();
    }, [param.id, token]);

    const styleUpload = {
        display: images ? "block" : "none"

    }

    const LeftContainer=styled.div``
  
    

    return (
        <MainContainer>
            <ProfileTitle>Profile</ProfileTitle> {/* Display title on left */}
            <LeftContainer>
                {loading ? (
                    <div id="file_img"><Loading/></div>
                ) : (
                    <ProfileImageWrapper>
                        <ProfileImage style={styleUpload} src={images ? user.image.url : ''} alt="Profile" />
                    </ProfileImageWrapper>
                )}
            </LeftContainer>
            
            <RightContainer>
                <ProfileInfo>
                    <ProfileField style={{ }}>
                        <label>Username</label>
                        <input type="text" name="username" value={user.username} readOnly />
                    </ProfileField>
                    <ProfileField>
                        <label>Email</label>
                        <input type="email" name="email" value={user.email} readOnly />
                    </ProfileField>
                </ProfileInfo>
                <EditButton>
                    <Link to={`/updateUser/${id}`}>
                        Update Profile
                    </Link>
                </EditButton>
            </RightContainer>
        </MainContainer>
    );
}

export default UserProfile;
