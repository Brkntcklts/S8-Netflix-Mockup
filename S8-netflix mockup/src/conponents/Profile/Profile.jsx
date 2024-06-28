//import React from 'react'
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Card =styled.div`
width: 20%;
max-width: 200px;
cursor: pointer;
color: gray;
&:hover{
  color: red;
}
`;

const Avatar= styled.img`
width: 100%;
border-radius: 0.2rem;
`
const Name= styled.h2`
text-align: center;
`

function Profile(props) {
    const {profile, setActiveProfile} = props;
  
  const {name,avatar}=profile;

  const history = useHistory();

  const setActiveProfileHandler =()=>{
    //set active profile
    setActiveProfile(profile);
    //history pushla
    history.push("/home")
    //for
    //if else if 
  }

    return (
    <Card onClick={setActiveProfileHandler}>
        <Avatar src={avatar}></Avatar>
       <Name>{name}</Name>
    </Card>
  )
}

export default Profile