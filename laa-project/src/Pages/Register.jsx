import React, { useState } from 'react';
import styled from 'styled-components';
import reg from '../image/reg.jpg';
import { mobile } from "../responsive";
import axios from 'axios';
import Loading from '../Components/utils/loading/Loading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px; 
  color: black;
  margin: 20px 0;
`;

const MainContainer = styled.div`
  width: 95vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 60%;
  transform: translateX(-50%);
  width: 80%;
  height: 60%;
  background-image: url(${reg});
  background-size: contain;
  background-position: bottom right;
  background-repeat: no-repeat;
  z-index: -1;
`;

const Wrapper = styled.div`
  width: 45%;
  padding: 20px;
  background-color: white;
  border: 2px solid #ccc;
  box-sizing: border-box;

  ${mobile`
    width: 75%;
  `}
`;

const Form = styled.form`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Agreement = styled.span`
  font-size: 12px;
  display: block;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 80px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "", confirmPassword: "" });
  const [images, setImages] = useState(false)
  const [loading, setLoading] = useState(false)

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUpload = async e=>{
    e.preventDefault()
    try{
      const file = e.target.files[0]
      if(!file) return alert("File does not exist.")
      if(file.size>1024*1024)
      return alert("Size too large!")

      if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/webp')
      return alert("File format is incorrect.")

      let formData = new FormData()
      formData.append('file', file)
      setLoading(true)
      const res = await axios.post('http://localhost:8000/api/uploadUserImage',formData)
      setLoading(false)
      setImages(res.data)
      console.log(res.data)
    }catch(err){
      alert(err.response.data.msg)

    }
  }

  const handleDestroy = async()=>{
    try{
      setLoading(true)
      await axios.post('http://localhost:8000/api/destroyUserImage',{
        public_id: images.public_id
      })

      setLoading(false)
      setImages(false)

    }catch(err){
      alert(err.response.data.msg)
    }
  }

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(images)
      if(!images) return alert("No Image uploaded")
      const{public_id, url} = images
      const response = await axios.post('http://localhost:8000/api/register', { ...user,image:{public_id,url} }, {
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        withCredentials: true
      });
      localStorage.setItem('firstLogin', true);
      window.location.href = "/";
      alert(response.data.msg);
      setImages(false)
    } catch (err) {
      alert(err.response ? err.response.data.msg : err.message);
    }
  };

  const styleUpload = {
    display: images ? "block" : "none"
  }

  return (
    <Container>
      <Title>SIGN IN</Title>
      <MainContainer>
      <div className='upload'>
                <input type='file' name='file' id='file_up' onChange={handleUpload}/>
                {
                    loading ? <div id="file_img"><Loading/></div>:
                    <div id="file_img" style={styleUpload}>
                    <img src={images ? images.url: ''} alt=''/>
                    <span onClick={handleDestroy}>X</span>
                     </div>
                }
            </div>
        <BackgroundImage />
        <Wrapper>
      
          <Form onSubmit={registerSubmit}>
            <Input type="text" placeholder="username" name="username" value={user.username} onChange={onChangeInput} />
            <Input type="email" placeholder="email" name="email" value={user.email} onChange={onChangeInput} />
            <Input type="password" placeholder="password" name="password" value={user.password} onChange={onChangeInput} />
            <Input type="password" placeholder="confirm password" name="confirmPassword" value={user.confirmPassword} onChange={onChangeInput} />
            <Agreement> By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
            <Button type="submit" style={{"padding-bottom":"30px"}}>Create</Button>
          </Form>
        </Wrapper>
      </MainContainer>
    </Container>
  );
};

export default Register;
