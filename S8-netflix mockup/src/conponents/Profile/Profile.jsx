//import React from 'react'
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Card =styled.div`
widthÇ 20%;
max-width: 200px;
`

const Avatar= styled.img`
width: 100%;
border-radius: 0.2rem;
`
const Name= styled.h2`
color: gray;
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
        <Name {name}></Name>
    </Card>
  )
}

export default Profile