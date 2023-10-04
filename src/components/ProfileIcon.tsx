import React from 'react';
import styled from 'styled-components';

// Define the styles for the profile icon circle
const IconCircle = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
`;

interface ProfileIconProps {
    initials: string;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ initials }) => {
    return (
        <IconCircle>
            {initials}
        </IconCircle>
    );
};

export default ProfileIcon;