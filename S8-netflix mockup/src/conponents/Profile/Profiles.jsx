//import React from 'react'
import { useState } from "react";
import { profilesDAta } from "../../profiles";
import styled from "styled-components";
import Profile from "./Profile";

const ProflesContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

function Profiles(props) {
  const [profiles] = useState(profilesDAta);
  const { setActiveProfile } = props;

  return(
  // eslint-disable-next-line no-unreachable
  <ProflesContainer>
    {profiles.map((profile) => {
      return (
        <Profile
          key={profile.id}
          profile={profile}
          setActiveProfile={setActiveProfile}
        />
      );
    })}
  </ProflesContainer>
  )
}

export default Profiles;
